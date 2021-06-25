import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import { BooksPresentation } from './presentation'

describe('Books presentation', () => {
  test('should show heading All Books when rendered', () => {
    const books = [{ id: 1 }]
    render(
      <BrowserRouter>
        <BooksPresentation books={books} />
      </BrowserRouter>
    )

    const element = screen.getByRole('titleAllBooks')

    expect(element).toHaveTextContent('All Books')
  })

  test('should not show book card when has no book', () => {
    const books = []
    render(
      <BrowserRouter>
        <BooksPresentation books={books} />
      </BrowserRouter>
    )

    const bookCards = screen.queryAllByRole('bookCard')

    expect(bookCards.length).toEqual(0)
  })

  test('should not show book card when has no book', () => {
    const books = [{ id: 1 }, { id: 2 }, { id: 3 }]
    render(
      <BrowserRouter>
        <BooksPresentation books={books} />
      </BrowserRouter>
    )

    const bookCards = screen.queryAllByRole('bookCard')

    expect(bookCards.length).toEqual(3)
  })
})
