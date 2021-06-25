import { render, screen, act } from '@testing-library/react'
import moxios from 'moxios'

import { Books } from '.'
import { axiosInstance } from '../utils/apis'

describe('Books', () => {
  beforeEach(() => {
    moxios.install(axiosInstance)
  })

  afterEach(() => {
    moxios.uninstall(axiosInstance)
    jest.resetAllMocks()
  })

  test('should render 0 book card when api return 0 book', async () => {
    act(() => {
      render(<Books />)
    })

    const stubBooks = []
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: stubBooks,
      })
    })
    const booksScreen = await screen
    const actual = screen.queryAllByRole('bookCard')
    expect(actual.length).toEqual(0)
  })

  test('should render 3 books card when api return 3 books', async () => {
    act(() => {
      render(<Books />)
    })

    const stubBooks = [{ id: 1 }, { id: 2 }, { id: 3 }]
    moxios.wait(() => {
      moxios.stubRequest('books', () => {
        return {
          status: 200,
          response: stubBooks,
        }
      })
      // const request = moxios.requests.mostRecent()
      // request.respondWith({
      // status: 200,
      // response: stubBooks,
      // })
    })
    const booksScreen = await screen
    expect(1).toBe(2)
    // booksScreen.debug()
    // const actual = screen.queryAllByRole('bookCard')
    // expect(actual.length).toEqual(3)
  })
})
