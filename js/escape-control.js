const modals = [];
let listener = null;


const onDocumentKeyDown = ({ key }) => {
  if (key === 'Escape') {
    const lastIndex = modals.length - 1;
    if (modals[lastIndex].condition && !modals[lastIndex].condition()) {
      return;
    }
    modals[lastIndex].closeFunction();
    modals.length = modals.length - 1;
    if (!modals.length) {
      document.removeEventListener('keydown', onDocumentKeyDown);
      listener = null;
    }
  }
};

export const setEscapeControl = (closeFunction, condition = null) => {
  modals.push({
    closeFunction,
    condition
  });
  if (!listener) {
    listener = document.addEventListener('keydown', onDocumentKeyDown);
  }
};

export const removeEscapeControl = () => {
  modals.length = modals.length - 1;
  if (!modals.length) {
    document.removeEventListener('keydown', onDocumentKeyDown);
    listener = null;
  }
};
