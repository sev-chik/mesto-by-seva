let content = document.querySelector('.content');
let profileName = content.querySelector('.profile__name');
let profileProfession = content.querySelector('.profile__profession');
let popup = content.querySelector('.popup');
let popupForm = content.querySelector('.popup__form');
let popupNameValue = content.querySelector('.popup__input_type_name');
let popupAboutValue = content.querySelector('.popup__input_type_about');
let editButton = content.querySelector('.profile__button-edit');
let closeButton = content.querySelector('.popup__button-close');

function popupOpen() {
  popup.classList.add('popup_opened');
  popupNameValue.value = profileName.textContent;
  popupAboutValue.value = profileProfession.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function popupSave(evt) {
  evt.preventDefault();
  popupClose();
  profileName.textContent = popupNameValue.value;
  profileProfession.textContent = popupAboutValue.value;
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', popupSave);