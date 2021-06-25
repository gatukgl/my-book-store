import { Link } from 'react-router-dom'

export const BookCard = ({ book }) => (
  <div className="col mb-5" key={book.id} role="bookCard">
    <div className="card h-100">
      <img className="card-img-top" src={book.coverImage} alt={book.bookName} />

      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">{book.bookName}</h5>
          <span>${book.price}</span>
        </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <Link
            className="btn btn-outline-dark mt-auto"
            to={`/${book.id}`}
            role="moreInfo"
          >
            More Info
          </Link>
        </div>
      </div>
    </div>
  </div>
)
