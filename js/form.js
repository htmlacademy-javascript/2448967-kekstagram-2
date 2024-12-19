import { isValid, reset as resetValidation } from './validation.js';
import { reset as resetScale } from './scale.js';
import { reset as resetEffects } from './effects.js';

import { POPUPS, SUBMIT_TEXTS } from './constants.js';
import { showPopup } from './popup';
import { sendData } from './api.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFileInput = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancelInput = uploadForm.querySelector('.img-upload__cancel');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const body = document.body;

const openForm = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

uploadFileInput.addEventListener('change', () => {
  openForm();
});

const closeForm = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  resetValidation();
  resetScale();
  resetEffects();
};

uploadCancelInput.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closeForm();
  }
});

const blockSubmit = (isBlocked = true) => {
  submitButton.disabled = isBlocked;
  submitButton.textContent = isBlocked ? SUBMIT_TEXTS.SENDING : SUBMIT_TEXTS.IDLE;
}

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (isValid()) {
    // заблокировать кнопку отправки
    blockSubmit();
    
    sendData()
      .then((response) => {
        if (!response.ok) {
          throw new Error()
        }
        // закрыть форму
        closeForm();
        // показать попап  об успешной отправке
        showPopup(POPUPS.SUCCESS);
      })
      .catch(() => {
        showPopup(POPUPS.ERROR);
      })
      .finally(() => {
        blockSubmit(false);
      })
  }
};

uploadForm.addEventListener('submit', onFormSubmit);