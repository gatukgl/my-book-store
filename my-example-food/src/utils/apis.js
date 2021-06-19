import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 1000,
})

export const getBooksById = async (id) => {
  const response = await axiosInstance.get(`books/${id}`)
  const data = response.data
  return data
}
