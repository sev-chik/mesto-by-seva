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

function openPopup(popup) {
  popup.classList.add('popup_opened');
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

  elementImage.addEventListener('click', function() {
      imageSrc.src = popupPlaceAboutValue;
      imageSrc.alt = popupPlaceNameValue;
      imageFigcaption.textContent = popupPlaceNameValue;
      openPopup(popupImage);
  });

  return elementsContainer.prepend(cloneElement);
}

for (let i = 0; i < initialCards.length; i++) {
  addElement(initialCards[i].name, initialCards[i].link);
}

function changeLike(event) {
  event.target.classList.toggle('element__vector_active');
}

function deleteElement(event) {
  event.target.closest('.element').remove();
}

profileAddButton.addEventListener('click', function() {
  popupFormPlace.reset();
  openPopup(popupPlace);
});

profileEditButton.addEventListener('click', function() {
  popupProfileName.value = profileName.textContent;
  popupProfileAbout.value = profileProfession.textContent;
  openPopup(popupProfile);
});

closeButtonProfile.addEventListener('click', function() {
  closePopup(popupProfile);
});

closeButtonPlace.addEventListener('click', function() {
  closePopup(popupPlace);
});

closeButtonImage.addEventListener('click', function() {
  closePopup(popupImage);
});

popupFormProfile.addEventListener('submit', function(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileProfession.textContent = popupProfileAbout.value;
  closePopup(popupProfile);
});

popupFormPlace.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const popupPlaceNameValue = popupPlaceName.value;
  const popupPlaceAboutValue = popupPlaceAbout.value;
  addElement(popupPlaceNameValue, popupPlaceAboutValue);
  closePopup(popupPlace);
});