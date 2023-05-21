let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__button-edit');
let closeButton = content.querySelector('.popup__button-close');
let popup = content.querySelector('.popup');

// console.log(`${popup.classList} 1`);

function popupOpen() {
  popup.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
