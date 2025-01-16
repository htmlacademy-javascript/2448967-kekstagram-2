const SCALE_VALUE_MIN = 25;
const SCALE_VALUE_MAX = 100;
const SCALE_VALUE_STEP = 25;
const SCALE_VALUE_DEFAULT = SCALE_VALUE_MAX;
const FACTOR = 0.01;

const scaleValue = document.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');
const scalleSmaller = document.querySelector('.scale__control--smaller');
const scalleBigger = document.querySelector('.scale__control--bigger');

let currentScale = SCALE_VALUE_DEFAULT;

const render = () => {
  scaleValue.value = `${currentScale}%`;
  imageUploadPreview.style.transform = `scale(${currentScale * FACTOR})`;
};

const onScalleSmallerClick = () => {
  currentScale = currentScale > SCALE_VALUE_MIN ? currentScale - SCALE_VALUE_STEP : SCALE_VALUE_MIN;
  render();
};

const onScalleBiggerClick = () => {
  currentScale = currentScale < SCALE_VALUE_MAX ? currentScale + SCALE_VALUE_STEP : SCALE_VALUE_MAX;
  render();
};

scalleSmaller.addEventListener('click', onScalleSmallerClick);
scalleBigger.addEventListener('click', onScalleBiggerClick);

export const reset = () => {
  currentScale = SCALE_VALUE_DEFAULT;
  render();
};

reset();
