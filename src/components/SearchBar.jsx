import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchBooks } from '../redux/actions';
import './SearchBar.css';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchBooks(term));
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
    // Optional: Uncomment for live search
    // dispatch(searchBooks(e.target.value));
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by title or author..."
          value={term}
          onChange={handleChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;