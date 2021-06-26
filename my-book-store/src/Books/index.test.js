import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { MemoryRouter } from 'react-router'

import { Books } from './'
import { getBooks } from '../utils/apis'

jest.mock('../utils/apis', () => {
  return {
    ...jest.requireActual('../utils/apis'),
    getBooks: jest.fn(),
  }
})

describe('Books', () => {
  test('should have 2 book cards when api return 2 books', async () => {
    const stubBooks = [{ id: 1 }, { id: 2 }]
    getBooks.mockImplementation(() => Promise.resolve(stubBooks))

    await act(async () => {
      await render(
        <MemoryRouter>
          <Books />
        </MemoryRouter>
      )
    })

    const bookCards = await screen.queryAllByRole('bookCard')
    expect(bookCards.length).toEqual(2)
  })
})
