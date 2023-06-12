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
const formList = Array.from(document.querySelectorAll('.popup__form'));


function openPopup(popup) {
  popup.classList.add('popup_opened');
  const popupOverlay = popup.querySelector('.popup__overlay');
  popupOverlay.addEventListener('click', function(evt) {
  evt.stopPropagation();
  closePopup(popup);
});
  document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  });
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
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

profileAddButton.addEventListener('click', function(evt) {
  evt.stopPropagation();
  popupFormPlace.reset();
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
  evt.stopPropagation();               //ЗДЕСЬ
  closePopup(popupPlace);
});

closeButtonImage.addEventListener('click', function(evt) {
  evt.stopPropagation(evt);
  closePopup(popupImage);
});




// const elementPopupOpened = content.querySelector('.popup_opened');
// popupElement.addEventListener('click', function() {
//   closePopup(popupProfile);
//   closePopup(popupPlace);
//   closePopup(popupImage);
// });

// popupElement.addEventListener('click', function() {
//   closePopup(popupProfile);
//   closePopup(popupPlace);
//   closePopup(popupImage);
// });

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








const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  // console.log(inputElement.validity.valid, '11');
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    // console.log(inputElement, '5');
    console.log(inputElement.validity.valid);
    return !inputElement.validity.valid
  })
}

const toggleButtonState = (inputList, buttonElement) => {
  // console.log(inputList, '4');
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_inactive');
    buttonElement.disabled = true;
  }
  else {
    buttonElement.classList.remove('button_inactive');
    buttonElement.disabled = false;
  }
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  // console.log(inputList, '3');
  const buttonElement = formElement.querySelector('.button');
  // console.log(buttonElement, '4');
  toggleButtonState(inputList, buttonElement);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

enableValidation(formList);



