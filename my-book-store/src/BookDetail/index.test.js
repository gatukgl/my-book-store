import React from 'react'
import { MemoryRouter } from 'react-router'
import { render, screen, act } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import { renderHook } from '@testing-library/react-hooks'
import moxios from 'moxios'

import { BookDetail } from './index'
import { AddToCartHook } from './hooks'
import { axiosInstance } from '../utils/apis'
import axios from 'axios'

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({ id: 1 }),
}))

describe('Book Details', () => {
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
})
