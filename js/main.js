import { renderThumbnails } from './thumbnails.js';
import './form.js';
import { showErrorMesage } from './util.js';
import { getData } from './api.js';
import './filter.js';
import { configFilter } from './filter.js';

getData()
  .then((data) => {
    renderThumbnails(data);
    configFilter(data);
  })
  .catch(() => {
    showErrorMesage();
  });