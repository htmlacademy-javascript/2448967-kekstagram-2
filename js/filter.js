import { renderThumbnails } from './thumbnails.js';
import { debounce } from './util.js';
import { FILTERS, ACTIVE_BUTTON, MAX_PICTURE_COUNT } from './constants.js';

let currentFilter = FILTERS.DEFAULT;
let pictures = [];
const filterElement = document.querySelector('.img-filters');

const onFilterChange = (evt) => {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON}`);
  if (!targetButton.matches('button')) {
    return;
  }
  if (activeButton === targetButton) {
    return;
  }
  activeButton.classList.toggle(ACTIVE_BUTTON);
  targetButton.classList.toggle(ACTIVE_BUTTON);
  currentFilter = targetButton.getAttribute('id');

  applyFilter();
};

const debounceRender = debounce(renderThumbnails);

const filtersActions = {
  [FILTERS.DEFAULT]: () => pictures,
  [FILTERS.RANDOM]: () => pictures.toSorted(() => 0.5 - Math.random()).slice(0, MAX_PICTURE_COUNT),
  [FILTERS.DISCUSSED]: () => pictures.toSorted((a, b) => b.comments.length - a.comments.length)
};

function applyFilter () {
  const filterPictures = filtersActions[currentFilter]();
  debounceRender(filterPictures);
}

export const initFilter = (picturesData) => {
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', onFilterChange);
  pictures = picturesData;
};

