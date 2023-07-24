export class FormValidator {
  constructor(settings, element) {
    this._settings = settings;
    this._element = element;
    this._inputList = Array.from(this._element.querySelectorAll(settings.inputSelector));
    this._buttonElement = this._element.querySelector(settings.submitButtonSelector);
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  enableValidation() {
      this._setEventListeners();
  };

  _setEventListeners () {
    // this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  _checkInputValidity (inputElement) {
    // this._errorElement = this._element.querySelector(`.${inputElement.id}-error`);
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _toggleButtonState () {
    if(this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = true;
    }
    else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _showInputError (inputElement, errorMessage) {
    this._errorElement = this._element.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._settings.inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._settings.errorClass);
  };
  
  _hideInputError (inputElement) {
    this._errorElement = this._element.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._settings.inputErrorClass);
    this._errorElement.classList.remove(this._settings.errorClass);
    this._errorElement.textContent = '';
  };

  _hasInvalidInput () {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }

}