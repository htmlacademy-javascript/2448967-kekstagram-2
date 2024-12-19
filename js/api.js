const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
}

const Method = {
  GET: 'GET',
  POST: 'POST'
}

export const getData = () =>
  fetch(`${BASE_URL}${Route.GET_DATA}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error()
      }
      return response.json()
    })

export const sendData = (body) =>
  fetch(`${BASE_URL}${Route.SEND_DATA}`, {
    body,
    method: 'POST',
  })