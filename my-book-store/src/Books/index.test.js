import { render, screen, act, waitFor } from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'
import { BrowserRouter } from 'react-router-dom'
import { MemoryRouter } from 'react-router'

import { Books } from '.'
import { getBooks } from '../utils/apis'

jest.mock('../utils/apis', () => ({ getBooks: jest.fn() }))
describe('Books', () => {
  test('should render 0 book card when api return 0 book', async () => {
    await getBooks.mockImplementation(() => Promise.resolve([]))
    await act(async () => {
      await render(
        <MemoryRouter>
          <Books />
        </MemoryRouter>
      )
    })
    let books = await screen.queryAllByRole('bookCard')
    expect(books.length).toBe(0)
  })

  test('should render 3 books card when api return 3 books', async () => {
    await getBooks.mockImplementation(() =>
      Promise.resolve([
        { id: 1, bookName: 'A' },
        { id: 2, bookName: 'B' },
        { id: 3, bookName: 'C' },
      ])
    )
    await act(async () => {
      await render(
        <MemoryRouter>
          <Books />
        </MemoryRouter>
      )
    })
    let books = await screen.findAllByRole('bookCard')
    expect(books.length).toBe(3)
  })
})
