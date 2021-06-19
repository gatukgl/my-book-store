import { useState } from 'react'

export function addToCartHook() {
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const addToCart = (isAdded) => {
    return setIsAddedToCart(isAdded)
  }

  return { isAddedToCart, addToCart }
}
