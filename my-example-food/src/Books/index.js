import { useEffect, useState } from 'react'
import { getBooks } from '../utils/apis'

import { BooksPresentation } from './presentation'

export const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(async () => {
    const books = await getBooks()
    setBooks(books)
  }, [])

  return <BooksPresentation books={books} />
}
