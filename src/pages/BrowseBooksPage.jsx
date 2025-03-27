import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookList from '../components/BookList';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import { filterBooksByCategory } from '../redux/actions';
import './BrowseBooksPage.css';

const BrowseBooksPage = () => {
  const { category } = useParams();
  const { filteredBooks, searchTerm } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // If a category is provided in the URL, filter by that category
    if (category) {
      dispatch(filterBooksByCategory(category));
    } else {
      // If no category is provided, show all books
      dispatch(filterBooksByCategory('all'));
    }
  }, [category, dispatch]);

  return (
    <div className="browse-books-page">
      <h1 className="page-title">Browse Books</h1>
      
      <div className="browse-container">
        <aside className="sidebar">
          <CategoryFilter activeCategory={category || 'all'} />
        </aside>
        
        <main className="main-content">
          <SearchBar />
          
          {searchTerm && (
            <div className="search-results-info">
              Showing results for: <span className="search-term">{searchTerm}</span>
            </div>
          )}
          
          <BookList books={filteredBooks} />
        </main>
      </div>
    </div>
  );
};

export default BrowseBooksPage;