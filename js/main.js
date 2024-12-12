import { getData } from './data.js';
import { renderThumbnails } from './thumbnails.js';
import './form.js';

const data = getData();
renderThumbnails(data);

