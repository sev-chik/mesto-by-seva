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
const elementTemplateContent = document.querySelector('#element-template').content;
const element = elementTemplateContent.querySelector('.element');
const imageFigcaption = popupImage.querySelector('.popup__figcaption');
const imageSrc = popupImage.querySelector('.popup__image');
const popupList = document.querySelectorAll('.popup');

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

function openPopup(popup) {
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

function addElement(popupPlaceNameValue, popupPlaceAboutValue) {
  const cloneElement = element.cloneNode(true);
  const elementTitle = cloneElement.querySelector('.element__title');
  const elementImage = cloneElement.querySelector('.element__image');

  elementTitle.textContent = popupPlaceNameValue;
  elementImage.src = popupPlaceAboutValue;
  elementImage.alt = popupPlaceNameValue;

  const likeButton = cloneElement.querySelector('.element__vector');
  likeButton.addEventListener('click', changeLike);
  
  const basketButton = cloneElement.querySelector('.element__basket');
  basketButton.addEventListener('click', deleteElement);

  elementImage.addEventListener('click', function(evt) {
    evt.stopPropagation();
      imageSrc.src = popupPlaceAboutValue;
      imageSrc.alt = popupPlaceNameValue;
      imageFigcaption.textContent = popupPlaceNameValue;
      openPopup(popupImage);
  });

  return cloneElement;
}

function renderCard(cloneElement) {
  elementsContainer.prepend(cloneElement);
}

initialCards.forEach(cloneElement => {
  const element = addElement(cloneElement.name, cloneElement.link);
  renderCard(element);
});

function changeLike(event) {
  event.stopPropagation();
  event.target.classList.toggle('element__vector_active');
}

function deleteElement(event) {
  event.stopPropagation();
  event.target.closest('.element').remove();
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
  const cloneElement = addElement(popupPlaceNameValue, popupPlaceAboutValue);
  renderCard(cloneElement);
  closePopup(popupPlace);
});

enableValidation(settings);