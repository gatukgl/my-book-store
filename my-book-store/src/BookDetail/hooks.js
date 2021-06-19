import { useState } from 'react'

export const AddToCartHook = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const addToCart = (isAdded) => {
    return setIsAddedToCart(isAdded)
  }

  return { isAddedToCart, addToCart }
}
