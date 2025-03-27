import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterBooksByCategory } from '../redux/actions';
import { categories } from '../data/books';
import './CategoryFilter.css';

const CategoryFilter = ({ activeCategory }) => {
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(filterBooksByCategory(category));
  };

  return (
    <div className="category-filter">
      <h3 className="filter-title">Categories</h3>
      <ul className="category-list">
        <li className={activeCategory === 'all' ? 'active' : ''}>
          <Link 
            to="/books" 
            onClick={() => handleCategoryClick('all')}
          >
            All Books
          </Link>
        </li>
        {categories.map(category => (
          <li 
            key={category} 
            className={activeCategory === category ? 'active' : ''}
          >
            <Link 
              to={`/books/${category}`} 
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;