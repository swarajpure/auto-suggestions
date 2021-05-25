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
const PUBLIC_FOLDER = process.env.PUBLIC_URL;

const AutoSuggestions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [message, setMessage] = useState(START_TYPING);
  const [isFetching, setIsFetching] = useState(false);

  const getAndSetData = async (query) => {
    setSearchResults([]);
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
        setIsFetching(true);
        getAndSetData(query);
      }
      else {
        setSearchResults([]);
      }
    }
  }

  return (
    <div className="container">
      <div className="container__search">
        <img 
          className="container__search__icon"
          src={`${PUBLIC_FOLDER}/magnifying-glass.png`}
          height="14px" 
          alt="seach"
        />
        <input
          className="container__search__input"
          placeholder="Search"
          type="text"
          autoFocus
          onChange={messageHandler}
          onKeyUp={(e) => debounce(() => changeHandler(e))}
        />
      </div>

      <HelperMessage message={message}/>

      <DisplayResults
        searchQuery={searchQuery}
        searchResults={searchResults} 
      />
    </div>
  );
}

export default AutoSuggestions;