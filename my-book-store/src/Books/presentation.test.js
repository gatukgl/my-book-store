import { render, screen } from '@testing-library/react'
import { BooksPresentation } from './presentation'

describe('Books presentation', () => {
  test('it should render title', () => {
    let expected = 'All Books'
    let books = []

    render(<BooksPresentation books={books} />)
    let title = screen.getByTestId('title')

    expect(title).toHaveTextContent(expected)
  })
})
