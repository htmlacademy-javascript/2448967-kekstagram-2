const TIME_OUT = 5000;
const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;

export const showErrorMesage = () => {
const newDataError =  dataErrorTemplate.cloneNode(true);
body.append(newDataError);
setTimeout(() => {
  newDataError.remove();
}, TIME_OUT)
}