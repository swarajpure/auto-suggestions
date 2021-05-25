import { BOOKS_API_URL } from '../constants/constants';

let abortController = new AbortController();

const abortRequest = () => {
  console.log('aborting....')
  abortController.abort();
  abortController = new AbortController();
}

const getData = async (query) => {
  try {
    const signal = abortController.signal;
    const books = await fetch(`${BOOKS_API_URL}/${query}`, { signal });
    const booksJson = await books.json();
    return booksJson;
  } catch (err) {
    console.log(err);
  }
}

export { getData, abortRequest };
