import {openPopup} from './index.js'; 
const content = document.querySelector('.content');
const popupImage = content.querySelector('.popup_option_image');
const elementTemplateContent = document.querySelector('#element-template').content;
const element = elementTemplateContent.querySelector('.element');
const imageFigcaption = popupImage.querySelector('.popup__figcaption');
const imageSrc = popupImage.querySelector('.popup__image');

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEsc);
// }

// function closeByEsc(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup); 
//   }
// } 

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEsc);
// }

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
  }

  _listenImage(elementImage) {
    // elementImage.addEventListener('click', function() {
      elementImage.addEventListener('click', () => {
        imageSrc.src = elementImage.src;
        imageSrc.alt = elementImage.alt;
        imageFigcaption.textContent = elementImage.alt;
        openPopup(popupImage);
      });
  }

  _handleImageClick() {
    
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

  addElement(popupPlaceNameValue, popupPlaceAboutValue) {
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
