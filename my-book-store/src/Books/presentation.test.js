import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import { BooksPresentation } from './presentation'

describe('Books presentation', () => {
  test('it should render title', () => {
    const expected = 'All Books'
    const books = []

    render(<BooksPresentation books={books} />)
    const title = screen.getByRole('heading')

    expect(title).toHaveTextContent(expected)
  })

  test('it should render 0 book when no book has sent', () => {
    const expected = 0
    const books = []

    render(<BooksPresentation books={books} />)
    const actual = screen.queryAllByRole('bookCard')

    expect(actual.length).toEqual(0)
  })

  test('it should render multiple books when has multiple books sent', () => {
    const expected = 3
    const books = [{ id: 1 }, { id: 2 }, { id: 3 }]

    render(
      <Router>
        <BooksPresentation books={books} />
      </Router>
    )
    const actual = screen.queryAllByRole('bookCard')

    expect(actual.length).toEqual(3)
  })
})
