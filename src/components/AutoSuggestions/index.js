import { useState } from 'react';
import HelperMessage from '../HelperMessage';
import DisplayResults from '../DisplayResults';
import './styles.css';
import generateMessage from '../../utils/generateMessage'
import { getData, abortRequest } from '../../utils/getData';
import debounce from '../../utils/debounce'
import { MIN_QUERY_LENGTH } from '../../constants/constants';
import { MESSAGES } from '../../constants/constants';

const { START_TYPING, LOADING, NO_RESULTS_FOUND } = MESSAGES;

const AutoSuggestions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [message, setMessage] = useState(START_TYPING);
  const [isFetching, setIsFetching] = useState(false);

  const getAndSetData = async (query) => {
    setSearchResults([]);
    setIsFetching(true);
    const resultsArray = await getData(query);
    setIsFetching(false);
    resultsArray?.length === 0 ? setMessage(NO_RESULTS_FOUND) : setMessage('');
    setSearchResults(resultsArray);
  };

  const messageHandler = (e) => {
    const query = e.target.value;
    const generatedMessage = generateMessage(query);
    setMessage(generatedMessage);
  }

  const changeHandler = (e) => {
    const query  = e.target.value
    if (query !== searchQuery) {
      setSearchQuery(query);
      if (query.length >= MIN_QUERY_LENGTH) {
        if(isFetching) abortRequest();
        setMessage(LOADING);
        getAndSetData(query);
      }
      else {
        setSearchResults([]);
      }
    }
  }

  return (
    <div className="container">
      <input
        className="container__search-box"
        placeholder="Search"
        type="text"
        autoFocus
        onChange={messageHandler}
        onKeyUp={(e) => debounce(() => changeHandler(e))}
      />

      <HelperMessage message={message}/>

      <DisplayResults
        searchQuery={searchQuery}
        searchResults={searchResults} 
      />
    </div>
  );
}

export default AutoSuggestions;