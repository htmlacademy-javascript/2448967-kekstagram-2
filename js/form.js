import { isValid, reset as resetValidation } from './validation.js';
import { reset as resetScale} from './scale.js';
import {reset as resetEffects} from './effects.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFileInput = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancelInput = uploadForm.querySelector('.img-upload__cancel');
const body = document.body;

const openForm = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
}

uploadFileInput.addEventListener('change', () => {
  openForm()
})

const closeForm = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  resetValidation();
  resetScale();
  resetEffects();
}

uploadCancelInput.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm()
})

document.addEventListener('keydown', (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault()
    closeForm()
  }
})

const onFormSubmit = (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
}

uploadForm.addEventListener('submit', onFormSubmit);