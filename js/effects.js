import { DEFAULT_EFFECT, EffectsSetting } from './constants.js';

const effectsList = document.querySelector('.effects__list');
const sliderContainer = document.querySelector('.effect-level__slider');
const value = document.querySelector('.effect-level__value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');
const sliderBlock = document.querySelector('.effect-level');

let currentEffect = DEFAULT_EFFECT;

noUiSlider.create(sliderContainer, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
  format: {
    to: function (v) {
      return parseFloat(v);
    },
    from: function (v) {
      return parseFloat(v);
    }
  },
});

const render = () => {
  const { style, units } = EffectsSetting[currentEffect];
  imageUploadPreview.style.filter = `${style}(${value.value}${units})`;
};

const updateSlider = () => {
  const { min, max, step } = EffectsSetting[currentEffect];
  sliderContainer.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    step,
    start: max,
  });
};

sliderContainer.noUiSlider.on('update', () => {
  value.value = sliderContainer.noUiSlider.get();
  render();
});

export const reset = () => {
  imageUploadPreview.style.filter = '';
  sliderBlock.classList.add('hidden');
};

effectsList.addEventListener('change', ({ target }) => {
  currentEffect = target.value;
  if (currentEffect === DEFAULT_EFFECT) {
    reset();
  } else {
    updateSlider();
    sliderBlock.classList.remove('hidden');
  }
});

reset();
