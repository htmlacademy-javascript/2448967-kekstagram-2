import { renderThumbnails } from './thumbnails.js';
import './form.js';
import { showErrorMesage } from './util.js';
import { getData } from './api.js';
import './filter.js';
import { initFilter } from './filter.js';

getData()
  .then((data) => {
    renderThumbnails(data);
    initFilter(data);
  })
  .catch(() => {
    showErrorMesage();
  });
