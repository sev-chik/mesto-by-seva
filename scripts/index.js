import {Card} from './Card.js'; 
import FormValidator from './FormValidator.js'; 
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
// const elementTemplateContent = document.querySelector('#element-template').content;
// const element = elementTemplateContent.querySelector('.element');
// const imageFigcaption = popupImage.querySelector('.popup__figcaption');
// const imageSrc = popupImage.querySelector('.popup__image');
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

initialCards.forEach(cloneElement => {
  const card = new Card(cloneElement, '#element-template');
  const element = card.addElement(card._name, card._link);
  renderCard(element);
});

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

popupList.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
       closePopup(popup)
    }
  })
});

profileAddButton.addEventListener('click', function(evt) {
  evt.stopPropagation();
  popupFormPlace.reset();
  const inputList = Array.from(popupFormPlace.querySelectorAll('.popup__input'));
  const buttonElement = popupFormPlace.querySelector('.button');
  toggleButtonState(inputList, buttonElement, settings);
  openPopup(popupPlace);
});

profileEditButton.addEventListener('click', function(evt) {
  evt.stopPropagation();
  popupProfileName.value = profileName.textContent;
  popupProfileAbout.value = profileProfession.textContent;
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

popupFormPlace.addEventListener('submit', function(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  const popupPlaceNameValue = popupPlaceName.value;
  const popupPlaceAboutValue = popupPlaceAbout.value;
  const initialCards = {
    name: popupPlaceNameValue,
    link: popupPlaceAboutValue
  };
  const card = new Card(initialCards, '#element-template');
  const element = card.addElement(card._name, card._link);
  renderCard(element);
  closePopup(popupPlace);
});

// enableValidation(settings);


// const formList = Array.from(document.querySelectorAll(settings.formSelector));
// formList.forEach((formElement) => {

enableValidation(settings);


// const settings = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.button',
//   inactiveButtonClass: 'button_inactive',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__input-error_active'
// };


const valid = new FormValidator(settings);
console.log(valid, 'valid');
console.log(valid._settings, '_settings');
console.log(valid._element, '_element');
console.log(valid._settings.formSelector, 'formSelector');
// const ena = valid.enableValidation(valid._settings);
// console.log(ena);