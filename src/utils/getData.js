import { BOOKS_API_URL } from '../constants/constants';

const abortController = new AbortController();
let signal = abortController.signal;

const getData = async (query) => {
  try {
    const books = await fetch(`${BOOKS_API_URL}/${query}`, { signal });
    const booksJson = await books.json();
    return booksJson;
  } catch (err) {
    console.log(err);
  }
}

const abortRequest = () => {
  abortController.abort();
}

export { getData, abortRequest };
