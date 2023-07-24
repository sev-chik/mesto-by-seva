import {Card} from './Card.js'; 
import {FormValidator} from './FormValidator.js'; 
const content = document.querySelector('.content');
const elementsContainer = content.querySelector('.elements');
const profileName = content.querySelector('.profile__name');
const profileProfession = content.querySelector('.profile__profession');
const profileAddButton = content.querySelector('.profile__button-add');
const profileEditButton = content.querySelector('.profile__button-edit');
const popupProfile = content.querySelector('.popup_option_profile');
const popupPlace = content.querySelector('.popup_option_place');
const popupImage = content.querySelector('.popup_option_image');
const popupProfileName = content.querySelector('.popup_option_profile .popup__input_type_name');
const popupProfileAbout = content.querySelector('.popup_option_profile .popup__input_type_about');
const popupPlaceName = content.querySelector('.popup_option_place .popup__input_type_name');
const popupPlaceAbout = content.querySelector('.popup_option_place .popup__input_type_about');
const popupFormProfile = content.querySelector('.popup_option_profile .popup__form');
const popupFormPlace = content.querySelector('.popup_option_place .popup__form');
const closeButtonProfile = content.querySelector('.popup_option_profile .popup__button-close');
const closeButtonPlace = content.querySelector('.popup_option_place .popup__button-close');
const closeButtonImage = content.querySelector('.popup_option_image .popup__button-close');
const imageFigcaption = popupImage.querySelector('.popup__figcaption');
const imageSrc = popupImage.querySelector('.popup__image');
const popupList = document.querySelectorAll('.popup');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
} 

function renderCard(cloneElement) {
  elementsContainer.prepend(cloneElement);
}

function handleCardClick(name, link) {
  // function handleCardClick() {
    imageSrc.src = link;
    imageSrc.alt = name;
    imageFigcaption.textContent = name;
    // imageSrc.src = this._link;
    // imageSrc.alt = this._name;
    // imageFigcaption.textContent = this._name;
    // console.log(name, link, 'name, link');
    openPopup(popupImage);
  }
  


popupList.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
       closePopup(popup)
    }
  })
});

profileEditButton.addEventListener('click', function(evt) {
  evt.stopPropagation();
  popupProfileName.value = profileName.textContent;
  popupProfileAbout.value = profileProfession.textContent;
  profileFormValidator.resetValidation();
  openPopup(popupProfile);
});

closeButtonProfile.addEventListener('click', function(evt) {
  evt.stopPropagation();
  closePopup(popupProfile);
});

closeButtonPlace.addEventListener('click', function(evt) {    
  evt.stopPropagation();
  closePopup(popupPlace);
});

closeButtonImage.addEventListener('click', function(evt) {
  evt.stopPropagation(evt);
  closePopup(popupImage);
});

popupFormProfile.addEventListener('submit', function(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileProfession.textContent = popupProfileAbout.value;
  closePopup(popupProfile);
});

profileAddButton.addEventListener('click', function() {
  popupFormPlace.reset();
  placeFormValidator.resetValidation();
  openPopup(popupPlace);
});

popupFormPlace.addEventListener('submit', function(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  const popupPlaceNameValue = popupPlaceName.value;
  const popupPlaceAboutValue = popupPlaceAbout.value;
  const initialCards = {
    name: popupPlaceNameValue,
    link: popupPlaceAboutValue
  };
  const element = createCard(initialCards);
  const elementImage = element.querySelector('.element__image');
  elementImage.addEventListener('click', () => {
    handleCardClick(elementImage.alt, elementImage.src);
  });
  renderCard(element);
  closePopup(popupPlace);
});


function createCard(cloneElement) {
  const card = new Card(cloneElement, '#element-template', handleCardClick);
  const element = card.addElement(cloneElement.name, cloneElement.link);
  return element;
  }

initialCards.forEach(cloneElement => {
  const element = createCard(cloneElement);
  renderCard(element);
});

const profileFormValidator = new FormValidator(settings, popupFormProfile);
profileFormValidator.enableValidation();

const placeFormValidator = new FormValidator(settings, popupFormPlace);
placeFormValidator.enableValidation();