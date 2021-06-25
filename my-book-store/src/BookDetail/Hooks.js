import { useState } from 'react'

export const useAddToCart = () => {
  const [isAddToCart, setIsAddedToCart] = useState(false)

  const addToCart = (isAddToCart) => {
    return setIsAddedToCart(isAddToCart)
  }

  return { 
      isAddToCart: isAddToCart, 
      addToCart: addToCart 
    }
}
