export const EFFECTS = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const EFFECTS_STYLES = {
  NONE: '',
  GRAYSCALE: 'grayscale',
  SEPIA: 'sepia',
  INVERT: 'invert',
  BLUR: 'blur',
  BRIGHTNESS: 'brightness'
};

const UNITS = {
  PX: 'px',
  NONE: '',
  PS: '%'
};

export const EffectsSetting = {
  [EFFECTS.NONE]: {
    min: 0,
    max: 100,
    step: 1,
    style: EFFECTS_STYLES.NONE,
    units: UNITS.NONE
  },
  [EFFECTS.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: EFFECTS_STYLES.GRAYSCALE,
    units: UNITS.NONE
  },
  [EFFECTS.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: EFFECTS_STYLES.SEPIA,
    units: UNITS.NONE
  },
  [EFFECTS.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
    style: EFFECTS_STYLES.INVERT,
    units: UNITS.PS
  },
  [EFFECTS.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
    style: EFFECTS_STYLES.BLUR,
    units: UNITS.PX
  },
  [EFFECTS.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
    style: EFFECTS_STYLES.BRIGHTNESS,
    units: UNITS.NONE
  }
};

export const DEFAULT_EFFECT = EFFECTS.NONE;

export const POPUPS = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export const SUBMIT_TEXTS = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

export const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

export const Method = {
  GET: 'GET',
  POST: 'POST'
};

export const MAX_PICTURE_COUNT = 10;

export const FILTERS = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

export const ACTIVE_BUTTON = 'img-filters__button--active';

export const COMMENTS_STEP = 5;
