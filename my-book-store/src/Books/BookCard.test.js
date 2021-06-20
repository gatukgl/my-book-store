import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

import { BookCard } from './BookCard'

describe('Book Card Snapshot', () => {
  test('should render correctly', () => {
    const book = {}

    const component = renderer.create(
      <BrowserRouter>
        <BookCard book={book} />
      </BrowserRouter>
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
