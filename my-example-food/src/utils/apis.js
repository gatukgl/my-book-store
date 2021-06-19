import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})

export const getBooksById = (id) => {
  axiosInstance.get(`books/${id}`).then((response) => {
    console.log(response)
  }).catch(error => console)
}
