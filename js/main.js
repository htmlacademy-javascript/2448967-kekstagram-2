import { renderThumbnails } from './thumbnails.js';
import './form.js';
import { showErrorMesage } from './util.js';
import { getData } from './api.js';

getData()
  .then((data) => {
    renderThumbnails(data);
  })
  .catch(() => {
    showErrorMesage();
  });