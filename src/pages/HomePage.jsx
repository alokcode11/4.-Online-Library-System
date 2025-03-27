import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookList from '../components/BookList';
import { categories } from '../data/books';
import './HomePage.css';

const HomePage = () => {
  const { books } = useSelector(state => state);
  const popularBooks = books.filter(book => book.popular).slice(0, 4);

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to the Online Library</h1>
        <p>Discover, read, and share your favorite books</p>
      </div>

      <section className="categories-section">
        <h2 className="section-title">Book Categories</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <Link 
              to={`/books/${category}`} 
              className="category-card" 
              key={category}
            >
              <div className="category-name">{category}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="popular-books-section">
        <div className="section-header">
          <h2 className="section-title">Popular Books</h2>
          <Link to="/books" className="view-all-link">
            View All Books
          </Link>
        </div>
        <BookList books={popularBooks} />
      </section>
    </div>
  );
};

export default HomePage;