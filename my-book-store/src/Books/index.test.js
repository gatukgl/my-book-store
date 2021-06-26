import { render, screen, act } from '@testing-library/react'

import { Books } from './'
import { getBooks } from '../utils/apis'

jest.mock('../utils/apis', () => {
  return {
    getBooks: jest.fn(),
  }
})

describe('Books', () => {
  test('should not have any book card when api return 0 book', () => {
    act(() => {
      render(<Books />)
    })

    const bookCards = screen.queryAllByRole('bookCard')
    expect(bookCards.length).toEqual(0)
  })

  test('should have 2 book cards when api return 2 books', () => {
    act(() => {
      render(<Books />)
    })

    const bookCards = screen.queryAllByRole('bookCard')
    expect(bookCards.length).toEqual(2)
  })
})
