export class FormValidator {
  constructor(settings, element) {
    this._settings = settings;
    this._element = element;
  }

  enableValidation(settings, formElement) {
      this._setEventListeners(formElement, settings);
  };

  _setEventListeners (formElement, settings) {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement, settings);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, settings);
        this._toggleButtonState(inputList, buttonElement, settings);
      });
    });
  };

  _checkInputValidity (formElement, inputElement, settings) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    } else {
      this._hideInputError(formElement, inputElement, settings);
    }
  };

  _toggleButtonState (inputList, buttonElement, settings) {
    console.log('check NEW toggleButtonState');
    if(this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(settings.inactiveButtonClass);
      buttonElement.disabled = true;
    }
    else {
      buttonElement.classList.remove(settings.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _showInputError (formElement, inputElement, errorMessage, settings) {
    console.log('check NEW _showInputError');
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
  };
  
  _hideInputError (formElement, inputElement, settings) {
    console.log('check NEW _hideInputError');
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = '';
  };

  _hasInvalidInput (inputList) {
    console.log('check NEW _hasInvalidInput');
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }

}