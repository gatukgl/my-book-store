import { useEffect } from 'react'

import { getBooksById } from '../utils/apis'
import { BookDetailPresentation } from './presentation'

export const BookDetail = () => {
  useEffect(() => {
    getBooksById(1)
  }, [])

  return <BookDetailPresentation />
}
