// const enableValidation = (settings) => {
//   formList = Array.from(document.querySelectorAll(settings.formSelector));
//   formList.forEach((formElement) => {
//     setEventListeners(formElement, settings);
//   });
// };

// function enableValidation (settings) {
//   formList = Array.from(document.querySelectorAll(settings.formSelector));
//   formList.forEach((formElement) => {
//     setEventListeners(formElement, settings);
//   });
// };

// function enableValidation (settings) {
// function enableValidation (settings, formElement) {
//   // formList = Array.from(document.querySelectorAll(settings.formSelector));
//   // formList.forEach((formElement) => {
//     // console.log(formList, 'formList');
//     // console.log(formElement, 'formElement');
//     // setEventListeners(formElement, settings);
//   // });
//     setEventListeners(formElement, settings);
// };

// const setEventListeners = (formElement, settings) => {
//   const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));  --2 юудет
//   const buttonElement = formElement.querySelector(settings.submitButtonSelector);
//   toggleButtonState(inputList, buttonElement, settings);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement, settings);
//       toggleButtonState(inputList, buttonElement, settings);
//     });
//   });
// };

// const toggleButtonState = (inputList, buttonElement, settings) => {
//   console.log('check old toggleButtonState');
//   if(hasInvalidInput(inputList)) {
//     buttonElement.classList.add(settings.inactiveButtonClass);
//     buttonElement.disabled = true;
//   }
//   else {
//     buttonElement.classList.remove(settings.inactiveButtonClass);
//     buttonElement.disabled = false;
//   }
// }

// const checkInputValidity = (formElement, inputElement, settings) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, settings);
//   } else {
//     hideInputError(formElement, inputElement, settings);
//   }
// };

// const showInputError = (formElement, inputElement, errorMessage, settings) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(settings.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(settings.errorClass);
// };

// const hideInputError = (formElement, inputElement, settings) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(settings.inputErrorClass);
//   errorElement.classList.remove(settings.errorClass);
//   errorElement.textContent = '';
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid
//   })
// }