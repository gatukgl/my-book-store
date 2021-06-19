import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

import { BookCard } from './BookCard'

describe('Book Card Snapshot', () => {
  const book = {
    coverImage: 'http://book-cover-image.url',
  }

  test('should be rendered correctly', () => {
    const component = renderer.create(
      <Router>
        <BookCard book={book} />
      </Router>
    ).toJSON()

    expect(component).toMatchSnapshot()
  })
})
