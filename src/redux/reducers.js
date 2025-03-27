import { ADD_BOOK, SEARCH_BOOKS, FILTER_BOOKS_BY_CATEGORY, RESET_FILTERS } from './types';
import books from '../data/books';

const initialState = {
  books: books,
  filteredBooks: books,
  searchTerm: '',
  category: 'all'
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      // Add a new book with an ID one higher than the current highest ID
      const newBook = {
        ...action.payload,
        id: Math.max(...state.books.map(book => book.id)) + 1,
        popular: false
      };
      return {
        ...state,
        books: [...state.books, newBook],
        filteredBooks: filterBooks([...state.books, newBook], state.searchTerm, state.category)
      };
    
    case SEARCH_BOOKS:
      return {
        ...state,
        searchTerm: action.payload,
        filteredBooks: filterBooks(state.books, action.payload, state.category)
      };
    
    case FILTER_BOOKS_BY_CATEGORY:
      return {
        ...state,
        category: action.payload,
        filteredBooks: filterBooks(state.books, state.searchTerm, action.payload)
      };
    
    case RESET_FILTERS:
      return {
        ...state,
        searchTerm: '',
        category: 'all',
        filteredBooks: state.books
      };
      
    default:
      return state;
  }
};

// Helper function to filter books based on search term and category
const filterBooks = (books, searchTerm, category) => {
  let result = books;
  
  // Apply category filter if not 'all'
  if (category && category !== 'all') {
    result = result.filter(book => book.category === category);
  }
  
  // Apply search term filter if not empty
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    result = result.filter(book => 
      book.title.toLowerCase().includes(term) || 
      book.author.toLowerCase().includes(term)
    );
  }
  
  return result;
};

export default bookReducer;