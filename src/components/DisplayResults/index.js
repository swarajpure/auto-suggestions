import Result from '../Result';
import './styles.css';
import { MIN_QUERY_LENGTH, MAX_RESULTS } from '../../constants/constants';

const DisplayResults = ({ searchQuery, searchResults }) => {

  const maxResults = searchResults.slice(0, MAX_RESULTS);
  const queryLength = searchQuery.length;
  const resultsLength = maxResults.length;

  const isStringLengthSmall = queryLength > 0 && queryLength < MIN_QUERY_LENGTH;
  const isZeroResults = queryLength >= MIN_QUERY_LENGTH && resultsLength === 0;

  return (
    <div className="results-container">
      {
        isStringLengthSmall ? <p className="hints">More hints please...</p>
          : isZeroResults ? <p className="error">No results found!</p>
            : <></>
      }
      {
        maxResults.length > 0 &&
          <div className="search-results">
            {
              maxResults.map((result) => {
                return (
                  <Result result={result} />
                )
              })
            }
          </div>
      }
    </div>
  )
}

export default DisplayResults;
