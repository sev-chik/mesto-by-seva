
// import {content as contentim} from './index.js'; 
// console.log(contentim);
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

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
} 

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
  }

  _listenImage(elementImage) {
    elementImage.addEventListener('click', function() {
      // elementImage.addEventListener('click', () => {
        imageSrc.src = elementImage.src;
        imageSrc.alt = elementImage.alt;
        imageFigcaption.textContent = elementImage.alt;
        openPopup(popupImage);
      });
  }

  _deleteElement(event) {
    event.target.closest('.element').remove();
  }

  _changeLike(element) {
    const likeButton = element.querySelector('.element__vector');
    likeButton.addEventListener('click', function(event) {
      event.target.classList.toggle('element__vector_active');
    });
  }

  _deleteBasket(element) {
    const basketButton = element.querySelector('.element__basket');
    basketButton.addEventListener('click', this._deleteElement);
  }

  _addElement(popupPlaceNameValue, popupPlaceAboutValue) {
    // this._popupPlaceNameValue = popupPlaceNameValue;
    // this._popupPlaceAboutValue = popupPlaceAboutValue;
    const cloneElement = element.cloneNode(true);
    const elementTitle = cloneElement.querySelector('.element__title');
    const elementImage = cloneElement.querySelector('.element__image');
    elementTitle.textContent = popupPlaceNameValue;
    elementImage.src = popupPlaceAboutValue;
    elementImage.alt = popupPlaceNameValue;
    // elementTitle.textContent = this._popupPlaceNameValue;
    // elementImage.src = this._popupPlaceAboutValue;
    // elementImage.alt = this._popupPlaceNameValue;
    this._changeLike(cloneElement);
    this._deleteBasket(cloneElement);
    this._listenImage(elementImage);
  
    return cloneElement;
  }
  
};
