let content = document.querySelector('.content');
let elementsContainer = document.querySelector('.elements');
let profileName = content.querySelector('.profile__name');
let profileProfession = content.querySelector('.profile__profession');
let addButton = content.querySelector('.profile__button-add');
let editButton = content.querySelector('.profile__button-edit');
let popup = content.querySelector('.popup');
let popupProfile = content.querySelector('.popup_option_profile');
let popupPlace = content.querySelector('.popup_option_place');
let popupProfileNameValue = content.querySelector('.popup_option_profile .popup__input_type_name');
let popupProfileAboutValue = content.querySelector('.popup_option_profile .popup__input_type_about');
let popupPlaceNameValue = content.querySelector('.popup_option_place .popup__input_type_name');
let popupPlaceAboutValue = content.querySelector('.popup_option_place .popup__input_type_about');
let saveButton = content.querySelector('.popup_option_profile .popup__form');
let createButton = content.querySelector('.popup_option_place .popup__form');
let closeButtonProfile = content.querySelector('.popup_option_profile .popup__button-close');
let closeButtonPlace = content.querySelector('.popup_option_place .popup__button-close');

function changeLike(event) {
  event.target.classList.toggle('element__vector_active');
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
    const basketButton = element.querySelector('.element__basket');
    basketButton.addEventListener('click', deleteElement);

    elementsContainer.append(element);
  }
}
addFirstElements();

function popupEditOpen() {
  popupProfile.classList.add('popup_opened');
  popupProfileNameValue.value = profileName.textContent;
  popupProfileAboutValue.value = profileProfession.textContent;
  console.log('popupEditOpen');
}

function popupAddOpen() {
  popupPlace.classList.add('popup_opened');
  popupPlaceNameValue.value = '';
  popupPlaceAboutValue.value = '';
  // console.log('popupAddOpen');    
}

function  popupEditClose() {
  popupProfile.classList.remove('popup_opened');
  // console.log('popupEditclose');
}

function  popupAddClose() {
  popupPlace.classList.remove('popup_opened');
  // console.log('popupAddclose');
}

function addElement() {
  const elementTemplate = document.querySelector('#element-template').content;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementTitle = element.querySelector('.element__title');
  const elementImage = element.querySelector('.element__image');

  elementTitle.textContent = popupPlaceNameValue.value;
  elementImage.src = popupPlaceAboutValue.value;
  elementImage.alt = popupPlaceNameValue.value;

  const likeButton = element.querySelector('.element__vector');
  likeButton.addEventListener('click', changeLike);
  // likeButton.addEventListener('click', function(event) {
  //     event.target.classList.toggle('element__vector_active');
  // });
  const basketButton = element.querySelector('.element__basket');
  basketButton.addEventListener('click', deleteElement);

  elementsContainer.prepend(element);
}

function changeLike(event) {
  event.target.classList.toggle('element__vector_active');
  // console.log(event.target, 'like');
}

function deleteElement(event) {
  event.target.closest('.element').remove();
}

function popupSave(evt) {
  evt.preventDefault();
  popupEditClose();
  profileName.textContent = popupProfileNameValue.value;
  profileProfession.textContent = popupProfileAboutValue.value;
  // console.log('saveb');
}

function popupCreate(evt) {
  evt.preventDefault();
  // let namePlace = popupPlaceNameValue.value;
  // let linkPlace = popupPlaceAboutValue.value;
  // console.log(namePlace, linkPlace);
  // profileName.textContent = popupNameValue.value;
  // profileProfession.textContent = popupAboutValue.value;
  // addElement(namePlace, linkPlace);
  addElement();
  popupAddClose();
  // console.log('create');
}

addButton.addEventListener('click', popupAddOpen);
editButton.addEventListener('click', popupEditOpen);
closeButtonProfile.addEventListener('click', popupEditClose);
closeButtonPlace.addEventListener('click', popupAddClose);
saveButton.addEventListener('submit', popupSave);   
createButton.addEventListener('submit', popupCreate);   