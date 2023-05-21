let content = document.querySelector('.content');
let popup = content.querySelector('.popup');
let profileName = content.querySelector('.profile__name');
let profileProfession = content.querySelector('.profile__profession');
let popupNameValue = content.querySelector('.popup__name');
let popupAboutValue = content.querySelector('.popup__about-me');

let editButton = content.querySelector('.profile__button-edit');
let closeButton = content.querySelector('.popup__button-close');
let saveButton = content.querySelector('.popup__button-save');

// popupNameValue.setAttribute('value', profileName.textContent);
// popupAboutValue.setAttribute('value', profileProfession.textContent);
popupNameValue.value = profileName.textContent;
popupAboutValue.value = profileProfession.textContent;

function popupOpen() {
  popup.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened');
  popupNameValue.value = profileName.innerHTML;
  popupAboutValue.value = profileProfession.innerHTML;
}

function popupSave() {
  popup.classList.remove('popup_opened');
  profileName.innerHTML = popupNameValue.value;
  profileProfession.innerHTML = popupAboutValue.value;
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
saveButton.addEventListener('click', popupSave);

// evt.preventDefault() НУЖНО БУДЕТ В ФУНКЦИИ ВЫЗВАТЬ, ЧТОБЫ SUBMIT ПУСТОЙ НЕ УЛЕТЕЛ???