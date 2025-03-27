import BookCard from './BookCard';
import './BookList.css';

const BookList = ({ books }) => {
  if (books.length === 0) {
    return (
      <div className="no-books-message">
        <p>No books found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="book-list">
      {books.map(book => (
        <div className="book-list-item" key={book.id}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;