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

function changeLike(event) {
  event.target.classList.toggle('element__vector_active');
  // console.log(event);
}

function addFirstElements() {
  const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  for (let i = 0; i < initialCards.length; i++) {
    const elementTemplate = document.querySelector('#element-template').content;
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    const elementTitle = element.querySelector('.element__title');
    const elementImage = element.querySelector('.element__image');
    elementTitle.textContent = initialCards[i].name;
    elementImage.src = initialCards[i].link;
    const likeButton = element.querySelector('.element__vector');
    likeButton.addEventListener('click', changeLike);
    elementsContainer.append(element);
  }
}
addFirstElements();

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

  const likeButton = element.querySelector('.element__vector');
  likeButton.addEventListener('click', changeLike);
  // likeButton.addEventListener('click', function(event) {
  //     event.target.classList.toggle('element__vector_active');
  // });

  elementsContainer.prepend(element);
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
popupForm.addEventListener('submit', popupSave);