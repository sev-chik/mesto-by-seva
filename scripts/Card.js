// const elementTemplateContent = document.querySelector('#element-template').content;
// const element = elementTemplateContent.querySelector('.element');

export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._element = this._templateSelector.querySelector('.element');
    this._handleCardClick = handleCardClick;
  }

  _addListeners(cloneElement, elementImage) {
    const basketButton = cloneElement.querySelector('.element__basket');
    basketButton.addEventListener('click', this._deleteElement);

    const likeButton = cloneElement.querySelector('.element__vector');
    likeButton.addEventListener('click', this._changeLike);

    // elementImage.addEventListener('click', this._handleCardClick);
    elementImage.addEventListener('click', () => {
      // this._handleCardClick(elementImage.alt, elementImage.src);
      this._handleCardClick(elementImage.alt, elementImage.src);
      // this._handleCardClick(this._name, this._link);
    });
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

  _changeLike() {
    event.target.classList.toggle('element__vector_active');
  }
  // _deleteBasket(element) {
  //   const basketButton = element.querySelector('.element__basket');
  //   basketButton.addEventListener('click', this._deleteElement);
  // }
  addElement(popupPlaceNameValue, popupPlaceAboutValue) {
    // this._popupPlaceNameValue = popupPlaceNameValue;
    // this._popupPlaceAboutValue = popupPlaceAboutValue;
    // const cloneElement = element.cloneNode(true);
    const cloneElement = this._element.cloneNode(true);
    const elementTitle = cloneElement.querySelector('.element__title');
    const elementImage = cloneElement.querySelector('.element__image');
    elementTitle.textContent = popupPlaceNameValue;
    elementImage.src = popupPlaceAboutValue;
    elementImage.alt = popupPlaceNameValue;


    // console.log(elementTemplateContent, 'elementTemplateContent');
    // console.log(document.querySelector('#element-template'));

    // elementTitle.textContent = this._popupPlaceNameValue;
    // elementImage.src = this._popupPlaceAboutValue;
    // elementImage.alt = this._popupPlaceNameValue;

    // elementImage.addEventListener('click', () => {
    //   this._handleCardClick(popupPlaceNameValue, popupPlaceAboutValue);
    // });
    
    // const likeButton = cloneElement.querySelector('.element__vector');
    // likeButton.addEventListener('click', () => {
    //   this._changeLike();
    // });

    // this._deleteBasket(cloneElement);
    // const basketButton = cloneElement.querySelector('.element__basket');
    // basketButton.addEventListener('click', this._deleteElement);
    // const basketButton = cloneElement.querySelector('.element__basket');
    // basketButton.addEventListener('click', this._deleteElement);
    // this._listenImage(elementImage);
    this._addListeners(cloneElement, elementImage);

    return cloneElement;
  }

};