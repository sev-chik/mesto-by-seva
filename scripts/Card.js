const elementTemplateContent = document.querySelector('#element-template').content;
const element = elementTemplateContent.querySelector('.element');

export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
  }

  // _listenImage(elementImage) {
  //   console.log(elementImage, 'elementImage1');
  //     elementImage.addEventListener('click', this._handleImageClick);
  // }
  
  // _listenImage(elementImage) {
  //   // elementImage.addEventListener('click', function() {
  //     elementImage.addEventListener('click', () => {
  //       imageSrc.src = elementImage.src;
  //       imageSrc.alt = elementImage.alt;
  //       imageFigcaption.textContent = elementImage.alt;
  //       openPopup(popupImage);
  //     });
  // }

  _deleteElement(event) {
    event.target.closest('.element').remove();
  }

  _changeLike(event) {
    event.target.classList.toggle('element__vector_active');
  }

  // _deleteBasket(element) {
  //   const basketButton = element.querySelector('.element__basket');
  //   basketButton.addEventListener('click', this._deleteElement);
  // }

  // _deleteBasket(element) {
  //   const basketButton = element.querySelector('.element__basket');
  //   basketButton.addEventListener('click', this._deleteElement);
  // }

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
    elementImage.addEventListener('click', () => {
      this._handleCardClick(popupPlaceNameValue, popupPlaceAboutValue);
    });
    
    // this._changeLike(cloneElement);
    const likeButton = cloneElement.querySelector('.element__vector');
    likeButton.addEventListener('click', (event) => {
      this._changeLike(event);
    });

    // this._deleteBasket(cloneElement);
    const basketButton = cloneElement.querySelector('.element__basket');
    basketButton.addEventListener('click', this._deleteElement);
    // this._listenImage(elementImage);
    return cloneElement;
  }

};


//нужно не только в функции отдельные выделить снятие лайка, удаление карточки, но и отдельные функции для простановки
//слушателей.