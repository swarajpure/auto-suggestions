import { useState } from 'react';
import './styles.css';
import DisplayResults from '../DisplayResults';
import getData from '../../utils/getData';
import { DEBOUNCE_DELAY, MIN_QUERY_LENGTH } from '../../constants/constants';

const SearchEngine = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  let timerId;

  const debounce = (func, delay = DEBOUNCE_DELAY) => {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay);
  }

  const getAndSetData = async (query) => {
    const resultsArray = await getData(query);
    setSearchResults(resultsArray); 
  };

  const changeHandler = (e) => {
    const query  = e.target.value
    if (query.length >= MIN_QUERY_LENGTH) {
      getAndSetData(query);
    }
    else {
      setSearchResults([]);
    }
    setSearchQuery(query);
  }

  return (
    <div className="container">
      <input
        className="container__search-box"
        placeholder="Search"
        type="text"
        autoFocus
        onKeyUp={(e) => debounce(() => changeHandler(e))}
      />

      <DisplayResults
        searchQuery={searchQuery}
        searchResults={searchResults} 
      />
    </div>
  );
}

export default SearchEngine;