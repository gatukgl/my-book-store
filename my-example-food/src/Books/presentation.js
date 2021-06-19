import { BookCard } from './BookCard'

export const BooksPresentation = ({ books }) => (
  <section className="py-5 bg-light">
    <div className="container px-4 px-lg-5">
      <h2 className="fw-bolder mb-4">All Books</h2>

      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {books.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  </section>
)
