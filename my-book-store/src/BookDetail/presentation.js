export const BookDetailPresentation = ({ book }) => (
  <div>
    <section className="py-5">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={book.coverImage}
              alt={book.bookName}
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5 fw-bolder">{book.bookName}</h1>
            <div className="fs-5 mb-5">
              <span>${book.price}</span>
              {/* <span className="text-decoration-line-through">${book.price}</span> */}
              {/*  <span>$40.00</span> */}
            </div>
            <p className="lead">{book.shortDescription}</p>
            <div className="d-flex">
              <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="num"
                value="1"
                style={{ maxWidth: '3rem' }}
              />
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
              >
                <i className="bi-cart-fill me-1" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)
