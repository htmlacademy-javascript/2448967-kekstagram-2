const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

export const renderThumbnails = (photos) => {
  console.log('@@@', photos)
  photos.forEach((photo) => {
    const thumbnail = template.cloneNode(true);
    const img = thumbnail.querySelector('.picture__img');
    img.src = photo.url;
    img.alt = photo.description;
    thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
    thumbnail.querySelector('.picture__likes').textContent = photo.likes;
    container.append(thumbnail);
  })
}




