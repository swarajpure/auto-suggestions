import { BOOKS_API_URL } from '../constants/constants';

const getData = async (query) => {
  const books = await fetch(`${BOOKS_API_URL}/${query}`);
  const booksJson = await books.json();
  return booksJson;
}

export default getData;
