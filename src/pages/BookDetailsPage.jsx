import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './BookDetailsPage.css';

const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books } = useSelector(state => state);
  
  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return (
      <div className="book-not-found">
        <h2>Book Not Found</h2>
        <p>Sorry, the book you're looking for doesn't exist.</p>
        <Link to="/books" className="btn btn-primary">
          Browse All Books
        </Link>
      </div>
    );
  }

  return (
    <div className="book-details-page">
      <button 
        className="back-button"
        onClick={() => navigate(-1)}
      >
        <i className="fas fa-arrow-left"></i> Back
      </button>

      <div className="book-details-container">
        <div className="book-cover-container">
          <img src={book.cover} alt={book.title} className="book-cover" />
        </div>
        
        <div className="book-details">
          <h1 className="book-title">{book.title}</h1>
          <p className="book-author">by {book.author}</p>
          
          <div className="book-rating">
            <span className="rating-value">{book.rating.toFixed(1)}</span>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <i 
                  key={i} 
                  className={`fas fa-star ${i < Math.round(book.rating) ? 'filled' : ''}`}
                ></i>
              ))}
            </div>
          </div>
          
          <div className="book-category">
            <span className="category-label">Category:</span>
            <Link to={`/books/${book.category}`} className="category-link">
              {book.category}
            </Link>
          </div>
          
          <div className="book-description">
            <h3>Description</h3>
            <p>{book.description}</p>
          </div>
          
          <Link to="/books" className="btn btn-primary browse-button">
            Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;