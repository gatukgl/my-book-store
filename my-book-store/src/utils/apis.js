import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 1000,
})

const getBooks = async () => {
  try {
    const response = await axiosInstance.get(`books`)
    const data = response.data
    return data
  } catch (error) {
    console.error('[getBooks]', error)
  }
}
export default getBooks

export const getBooksById = async (id) => {
  try {
    const response = await axiosInstance.get(`books/${id}`)
    const data = response.data
    return data
  } catch (error) {
    console.error('[getBooksById]', error)
  }
}
