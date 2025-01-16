import { isValid, reset as resetValidation } from './validation.js';
import { reset as resetScale } from './scale.js';
import { reset as resetEffects } from './effects.js';

import { POPUPS, SUBMIT_TEXTS } from './constants.js';
import { showPopup } from './popup';
import { sendData } from './api.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFileInput = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancelInput = uploadForm.querySelector('.img-upload__cancel');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const inputHashtags = uploadForm.querySelector('.text__hashtags');
const inputComment = uploadForm.querySelector('.text__description');
const body = document.body;

const closeForm = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  resetValidation();
  resetScale();
  resetEffects();
};

const canCloseForm = () => !(document.activeElement === inputHashtags || document.activeElement === inputComment)

const openForm = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  setEscapeControl(closeForm, canCloseForm);
};

uploadFileInput.addEventListener('change', () => {
  openForm();
});


uploadCancelInput.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
  removeEscapeControl();
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

    sendData(new FormData(uploadForm))
      .then((response) => {
        if (!response.ok) {
          throw new Error()
        }
        // закрыть форму
        closeForm();
        removeEscapeControl();
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