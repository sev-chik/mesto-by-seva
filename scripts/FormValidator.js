export default class FormValidator {
  constructor(settings, element) {
    this._settings = settings;
    this._element = element;
  }


  enableValidation(settings) {
    formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach((formElement) => {
      setEventListeners(formElement, settings);
    });
    // return settings.errorClass;
  };

}




  // enableValidation(settings) {
  //   // formList = Array.from(document.querySelectorAll(settings.formSelector));
  //   // formList.forEach((formElement) => {
  //   //   setEventListeners(formElement, settings);
  //   // });
  //   return settings.errorClass;
  // };



//ТРЕБОВАНИЯ ИЗ ПРАКТИКУМА

// 1. принимает в конструктор объект настроек с селекторами и классами формы;
// эТО ИМЕЕТСЯ В ВИДУ, ЧТО ПЕРЕДАЁТСЯ ПЕРВЫМ ПАРАМЕТРОМ SETTINGS