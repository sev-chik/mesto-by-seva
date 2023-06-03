let content = document.querySelector('.content');
let elementsContainer = document.querySelector('.elements');
let profileName = content.querySelector('.profile__name');
let profileProfession = content.querySelector('.profile__profession');
let addButton = content.querySelector('.profile__button-add');
let editButton = content.querySelector('.profile__button-edit');
let popup = content.querySelector('.popup');
let popupForm = content.querySelector('.popup__form');
let popupNameValue = content.querySelector('.popup__input_type_name');
let popupAboutValue = content.querySelector('.popup__input_type_about');
let closeButton = content.querySelector('.popup__button-close');
let likeButton = content.querySelector('.element__vector');

function popupOpen() {
  popup.classList.add('popup_opened');
  popupNameValue.value = profileName.textContent;
  popupAboutValue.value = profileProfession.textContent;
  console.log('popupOpen');
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function addElement() {
  const elementTemplate = document.querySelector('#element-template').content;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  elementsContainer.append(element);
}

function changeLike(event) {
  event.target.classList.toggle('element__vector_active');
  console.log(event);
}

function popupSave(evt) {
  evt.preventDefault();
  popupClose();
  profileName.textContent = popupNameValue.value;
  profileProfession.textContent = popupAboutValue.value;
}

addButton.addEventListener('click', addElement);
editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
likeButton.addEventListener('click', changeLike);
// likeButton.addEventListener('click', function (event) {
//     event.target.classList.toggle('element__vector_active');
// });
popupForm.addEventListener('submit', popupSave);