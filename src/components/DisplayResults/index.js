import Result from '../Result';
import './styles.css';
import { MAX_RESULTS } from '../../constants/constants';

const DisplayResults = ({ searchResults }) => {
  const maxResults = searchResults?.slice(0, MAX_RESULTS);

  if (maxResults?.length) {
    return (
      <div className="search-results">
        {
          maxResults.map((result) => {
            return (
              <Result key={result} result={result} />
            )
          })
        }
      </div>
    )
  }
  else { return null }
}


export default DisplayResults;
