const content = document.querySelector('.content');
const elementsContainer = content.querySelector('.elements');
const profileName = content.querySelector('.profile__name');
const profileProfession = content.querySelector('.profile__profession');
const addButton = content.querySelector('.profile__button-add');
const editButton = content.querySelector('.profile__button-edit');
const popup = content.querySelector('.popup');
const popupProfile = content.querySelector('.popup_option_profile');
const popupPlace = content.querySelector('.popup_option_place');
const popupImage = content.querySelector('.popup_option_image');
const popupProfileNameValue = content.querySelector('.popup_option_profile .popup__input_type_name');
const popupProfileAboutValue = content.querySelector('.popup_option_profile .popup__input_type_about');
const popupPlaceNameValue = content.querySelector('.popup_option_place .popup__input_type_name');
const popupPlaceAboutValue = content.querySelector('.popup_option_place .popup__input_type_about');
const saveButton = content.querySelector('.popup_option_profile .popup__form');
const createButton = content.querySelector('.popup_option_place .popup__form');
const closeButtonProfile = content.querySelector('.popup_option_profile .popup__button-close');
const closeButtonPlace = content.querySelector('.popup_option_place .popup__button-close');
const closeButtonImage = content.querySelector('.popup_option_image .popup__button-close');

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

    const ImageButton = element.querySelector('.element__image');
    ImageButton.addEventListener('click', function() {
        const imageSrc = popupImage.querySelector('.popup__image');
        const imageFigcaption = popupImage.querySelector('.popup__figcaption');
        imageSrc.src = ImageButton.src;
        imageSrc.alt = elementTitle.textContent;
        imageFigcaption.textContent = elementTitle.textContent;
        popupImage.classList.add('popup_opened');
    });

    elementsContainer.append(element);
  }
}
addFirstElements();

function popupEditOpen() {
  popupProfileNameValue.value = profileName.textContent;
  popupProfileAboutValue.value = profileProfession.textContent;
  popupProfile.classList.add('popup_opened');
  // console.log('popupEditOpen');
}

function popupAddOpen() {
  popupPlaceNameValue.value = '';
  popupPlaceAboutValue.value = '';
  popupPlace.classList.add('popup_opened');
  // console.log('popupAddOpen');    
}

// function popupImageOpen() {
// // function popupImageOpen(ImageButton) {
//   // popupPlaceNameValue.value = '';
//   // popupPlaceAboutValue.value = '';

//   const imageSrc = popupImage.querySelector('.popup__image');
//   console.log(imageSrc.src);  
//   popupImage.classList.add('popup_opened');

//   // console.log('popupAddOpen');    
// }
// popupImageOpen();

function  popupEditClose() {
  popupProfile.classList.remove('popup_opened');
}

function  popupAddClose() {
  popupPlace.classList.remove('popup_opened');
}

function  popupImageClose() {
  popupImage.classList.remove('popup_opened');
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

  const ImageButton = element.querySelector('.element__image');
  ImageButton.addEventListener('click', function() {
      const imageSrc = popupImage.querySelector('.popup__image');
      const imageFigcaption = popupImage.querySelector('.popup__figcaption');
      imageSrc.src = ImageButton.src;
      imageSrc.alt = elementTitle.textContent;
      imageFigcaption.textContent = elementTitle.textContent;
      popupImage.classList.add('popup_opened');
  });

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
  profileName.textContent = popupProfileNameValue.value;
  profileProfession.textContent = popupProfileAboutValue.value;
  popupEditClose();
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
closeButtonImage.addEventListener('click', popupImageClose);
saveButton.addEventListener('submit', popupSave);   
createButton.addEventListener('submit', popupCreate);   