import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getBooksById } from '../utils/apis'
import { BookDetailPresentation } from './presentation'
import { useAddToCart } from './Hooks'

export const BookDetail = () => {
  const { id } = useParams()
  const [book, setBook] = useState({})
  const { isAddToCart, addToCart } = useAddToCart()

  useEffect(() => {
    async function fetchData() {
      const book = await getBooksById(id)
      setBook(book)
    }

    fetchData()
  }, [id])

  const onAddToCartClicked = () => {
    const newIsAddToCart = !isAddToCart
    addToCart(newIsAddToCart)
  }

  return (
    <BookDetailPresentation
      book={book}
      onAddToCartClicked={onAddToCartClicked}
    />
  )
}
