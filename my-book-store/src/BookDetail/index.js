import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getBooksById } from '../utils/apis'
import { BookDetailPresentation } from './presentation'

export const BookDetail = () => {
  const { id } = useParams()
  const [book, setBook] = useState({})
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const book = await getBooksById(id)
      setBook(book)
    }

    fetchData()
  }, [id])

  const onAddToCartClicked = () => {
    const shouldAdded = !isAddedToCart
    setIsAddedToCart(shouldAdded)
  }

  return (
    <BookDetailPresentation
      book={book}
      onAddToCartClicked={onAddToCartClicked}
    />
  )
}
