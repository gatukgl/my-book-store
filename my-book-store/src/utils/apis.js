import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 1000,
})

export const getBooks = async () => {
  try {
    const response = await axiosInstance.get(`books`)
    console.log('data')
    const data = response.data
    return data
  } catch (error) {
    console.error('[getBooks]', error)
  }
}

export const getBooksById = async (id) => {
  try {
    const response = await axiosInstance.get(`books/${id}`)
    const data = response.data
    return data
  } catch (error) {
    console.error('[getBooksById]', error)
  }
}
