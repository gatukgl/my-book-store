import { render, screen, act, fireEvent } from '@testing-library/react'
import { useParams } from 'react-router'

import { BookDetail } from './'
import { getBooks, getBooksById } from '../utils/apis'
import * as hooks from './Hooks'

jest.mock('react-router', () => {
  return {
    ...jest.requireActual('react-router'),
    useParams: jest.fn(),
  }
})

jest.mock('../utils/apis', () => {
  return {
    getBooksById: jest.fn(),
  }
})

describe('Book Detail', () => {
  test('should get book detail by id', async () => {
    useParams.mockImplementation(() => {
      return {
        id: 1,
      }
    })
    await getBooksById.mockImplementation(() => {
      return Promise.resolve({ id: 1, bookName: 'Harry' })
    })
    await act(async () => {
      await render(<BookDetail />)
    })

    const text = await screen.getByText('Harry')
    expect(text).not.toBeNull()
  })

  test('should call addToCart when click add to cart', async () => {
    const useAddToCartSpy = jest.spyOn(hooks, 'useAddToCart')

    useParams.mockImplementation(() => {
      return {
        id: 1,
      }
    })
    await getBooksById.mockImplementation(() => {
      return Promise.resolve({ id: 1, bookName: 'Harry' })
    })
    await act(async () => {
      await render(<BookDetail />)
    })

    const addToCartButton = await screen.getByRole('addToCart')
    fireEvent.click(addToCartButton)

    expect(useAddToCartSpy).toHaveBeenCalled()
  })
})
