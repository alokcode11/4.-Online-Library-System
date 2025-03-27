import { ADD_BOOK, SEARCH_BOOKS, FILTER_BOOKS_BY_CATEGORY, RESET_FILTERS } from './types';

// Action to add a new book to the library
export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book
  };
};

// Action to search books by title or author
export const searchBooks = (searchTerm) => {
  return {
    type: SEARCH_BOOKS,
    payload: searchTerm
  };
};

// Action to filter books by category
export const filterBooksByCategory = (category) => {
  return {
    type: FILTER_BOOKS_BY_CATEGORY,
    payload: category
  };
};

// Action to reset all filters
export const resetFilters = () => {
  return {
    type: RESET_FILTERS
  };
};