import { renderHook, act } from '@testing-library/react-hooks'

import { useAddToCart } from './Hooks'

describe('Book Detail Hooks', () => {
  test('isAddToCart should be true when sending add to cart input is true', () => {
    const { result } = renderHook(() => useAddToCart())

    act(() => {
      result.current.addToCart(true)
    })

    expect(result.current.isAddToCart).toBeTruthy()
  })
})
