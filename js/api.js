import { Method, Route } from "./constants";

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const body = document.body;

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
    method: Method.POST
  })