import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getBooksById } from '../utils/apis'
import { BookDetailPresentation } from './presentation'
import { AddToCartHook } from './hooks'

export const BookDetail = () => {
  const { id } = useParams()
  const [book, setBook] = React.useState({})

  const { isAddedToCart, addToCart } = AddToCartHook()

  useEffect(() => {
    async function fetchData() {
      const book = await getBooksById(id)
      console.log('yay')
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
