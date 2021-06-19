import { render, screen } from '@testing-library/react'
import moxios from 'moxios'

import { Books } from '.'

describe('Books', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('should render 0 book card when api return 0 book', () => {
    const stubBooks = []
    moxios.stubRequest('books', () => {
      return {
        status: 200,
        response: stubBooks,
      }
    })

    render(<Books />)

    const actual = screen.findAllByRole('bookCard')
    moxios.wait(() => {
      expect(actual.length).toEqual(0)
    })
  })

  test('should render 3 book card when api return 3 books', () => {
    const stubBooks = [{ id: 1 }, { id: 2 }, { id: 3 }]
    moxios.stubRequest('books', () => {
      return {
        status: 200,
        response: stubBooks,
      }
    })

    render(<Books />)

    const actual = screen.findAllByRole('bookCard')
    moxios.wait(() => {
      expect(actual.length).toEqual(3)
    })
  })
})
