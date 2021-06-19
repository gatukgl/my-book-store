import React from 'react'
import { MemoryRouter } from 'react-router'
import { render, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import { renderHook, act } from '@testing-library/react-hooks'

import { BookDetail } from './index'
import { AddToCartHook } from './hooks'

describe('Adding book to cart', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  test('should call setIsAddedToCart when click on add to cart button', () => {
    const useStateSpy = jest.spyOn(React, 'useState')
    const setIsAddedToCart = jest.fn()
    useStateSpy.mockImplementation((isAddedToCart) => {
      return [isAddedToCart, setIsAddedToCart]
    })
    render(
      <MemoryRouter>
        <BookDetail />
      </MemoryRouter>
    )
    const addToCartButton = screen.getByRole('addToCart')

    fireEvent.click(addToCartButton)

    expect(setIsAddedToCart).toHaveBeenCalled()
  })

  test('should set isAddedToCart to true when sending true', () => {
    const { result } = renderHook(() => AddToCartHook())

    act(() => {
      result.current.addToCart(true)
    })

    expect(result.current.isAddedToCart).toBeTruthy()
  })

  test('should set isAddedToCart to false when sending false', () => {
    const { result } = renderHook(() => AddToCartHook())

    act(() => {
      result.current.addToCart(false)
    })

    expect(result.current.isAddedToCart).toBeFalsy()
  })
})
