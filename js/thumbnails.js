import { open as openModal } from './modal.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const containerElement = document.querySelector('.pictures');

let localData;

export const renderThumbnails = (photos) => {
  localData = [...photos];

  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const thumbnail = template.cloneNode(true);
    const image = thumbnail.querySelector('.picture__img');
    image.src = photo.url;
    image.alt = photo.description;
    thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
    thumbnail.querySelector('.picture__likes').textContent = photo.likes;

    thumbnail.dataset.id = photo.id;
  
    fragment.append(thumbnail);
  })
  containerElement.append(fragment);
}

containerElement.addEventListener('click', ({target}) => {
 const card = target.closest('.picture');
 if(card) {
  const id = Number(card.dataset.id);
  const photo = localData.find((item) => item.id === id);
  openModal(photo);
 }
})




