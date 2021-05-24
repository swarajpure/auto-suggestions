const MIN_QUERY_LENGTH = 3;
const DEBOUNCE_DELAY = 500;
const MAX_RESULTS = 10;
const BOOKS_API_URL = 'https://search-books-titles.herokuapp.com';
const MESSAGES = { 
  START_TYPING: 'Please start typing...',
  MORE_HINTS: 'More hints please...',
  LOADING: 'Loading...',
  NO_RESULTS_FOUND: 'No results found...' ,
};

export { 
  MIN_QUERY_LENGTH,
  DEBOUNCE_DELAY,
  MAX_RESULTS,
  BOOKS_API_URL,
  MESSAGES
};
