import { isValid, reset as resetValidation } from './validation.js';
import { reset as resetScale } from './scale.js';
import { reset as resetEffects } from './effects.js';

import { POPUPS, SUBMIT_TEXTS } from './constants.js';
import { showPopup } from './popup';
import { sendData } from './api.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';
import { showErrorMesage } from './util.js';

const FILE_TYPES = ['jpg', 'jpeg','png', 'gif', 'jfif'];

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const uploadFileInput = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancelInput = uploadForm.querySelector('.img-upload__cancel');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const inputHashtags = uploadForm.querySelector('.text__hashtags');
const inputComment = uploadForm.querySelector('.text__description');
const uploadPreview = document.querySelector('.img-upload__preview > img');
const uploadPreviewEffects = document.querySelectorAll('.effects__preview');
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

const onFileInputChange = () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const FileExt = fileName.split('.').pop();
  const matches = FILE_TYPES.includes(FileExt);

  if(matches) {
    const url = URL.createObjectURL(file);
    uploadPreview.src = url;
    uploadPreviewEffects.forEach((item)=> {
      item.style.backgroundImage = `url(${url})`;
    });
  }
   else {
      showErrorMesage();
      return;
    }
    openForm();
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