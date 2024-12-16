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