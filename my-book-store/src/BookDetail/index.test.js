import React from 'react'
import { MemoryRouter } from 'react-router'
import { render, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'

import { BookDetail } from './index'

describe('Adding book to cart', () => {
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

  test('should set isAddedToCart to true when click on add to cart button', () => {
    
  })
})
