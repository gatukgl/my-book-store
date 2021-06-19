import renderer from 'react-test-renderer'

import { BookDetailPresentation } from './presentation'

describe('Book Detail Snapshot', () => {
  test('should be rendered correctly', () => {
    const book = {
      coverImage: 'http://cover-image.url',
    }
    const component = renderer.create(<BookDetailPresentation book={book} />)
  })
})
