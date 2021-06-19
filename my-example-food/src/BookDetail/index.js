import { useEffect, useState } from 'react'

import { getBooksById } from '../utils/apis'
import { BookDetailPresentation } from './presentation'

export const BookDetail = () => {
  const [book, setBook] = useState({})

  useEffect(async () => {
    const book = await getBooksById(1)
    setBook(book)
  }, [])

  return <BookDetailPresentation book={book} />
}
