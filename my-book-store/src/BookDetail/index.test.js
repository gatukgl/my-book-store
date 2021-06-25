import React from 'react'
import { render, screen, act } from '@testing-library/react'
import moxios from 'moxios'

import { BookDetail } from './index'
import { axiosInstance, getBooksById } from '../utils/apis'

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({ id: 1 }),
}))

jest.mock('../utils/apis', () => ({
  ...jest.requireActual('../utils/apis'),
  getBooksById: jest.fn(),
}))

describe('Books Details with manual mock', () => {
  test('should render details', async () => {
    await getBooksById.mockImplementation(() =>
      Promise.resolve({ id: 1, bookName: 'AAAA' })
    )

    await act(async () => {
      await render(<BookDetail />)
    })

    let book = await screen.getAllByText('AAAA')
    expect(book).not.toBeNull()
  })
})

xdescribe('Book Details', () => {
  beforeEach(() => {
    moxios.install(axiosInstance)
  })

  afterEach(() => {
    moxios.uninstall(axiosInstance)
    jest.restoreAllMocks()
  })

  test('should render book detail from API', async () => {
    act(() => {
      render(<BookDetail />)
    })

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: {
          id: 1,
          coverImage: 'http://image.url',
          bookName: 'Harry Potty',
          price: 1.5,
        },
      })
    })

    const bookDetailScreen = await screen
    const bookName = bookDetailScreen.findAllByText('Harry Potty')
    const price = bookDetailScreen.findAllByText('$1.5')
    expect(bookName).not.toBeNull()
    expect(price).not.toBeNull()
  })

  xtest('should call setBook when able to get book detail by id', async () => {
    const useStateSpy = jest.spyOn(React, 'useState')
    const setState = jest.fn()
    useStateSpy.mockImplementation((init) => {
      return [init, setState]
    })

    render(<BookDetail />)

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: {
          id: 1,
          coverImage: 'http://image.url',
          bookName: 'Harry Potty',
          price: 1.5,
        },
      })
    })

    expect(setState).toHaveBeenCalled()
  })
})
