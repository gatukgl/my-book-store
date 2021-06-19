import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getBooksById } from '../utils/apis'
import { BookDetailPresentation } from './presentation'
import { addToCartHook } from './hooks'

export const BookDetail = () => {
  const { id } = useParams()
  const [book, setBook] = useState({})

  const { isAddedToCart, addToCart } = addToCartHook()

  useEffect(() => {
    async function fetchData() {
      const book = await getBooksById(id)
      setBook(book)
    }

    fetchData()
  }, [id])

  const onAddToCartClicked = () => {
    const shouldAdded = !isAddedToCart
    addToCart(shouldAdded)
  }

  return (
    <BookDetailPresentation
      book={book}
      onAddToCartClicked={onAddToCartClicked}
    />
  )
}
