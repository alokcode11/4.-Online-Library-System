import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book }) => {
  const { id, title, author, cover, rating, category } = book;

  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={cover} alt={title} />
      </div>
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">by {author}</p>
        <p className="book-category">Category: {category}</p>
        <div className="book-rating">
          <span className="rating-value">{rating.toFixed(1)}</span>
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`fas fa-star ${i < Math.round(rating) ? 'filled' : ''}`}
              ></i>
            ))}
          </div>
        </div>
        <Link to={`/book/${id}`} className="btn btn-primary view-details">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;