import './styles.css';

const Result = ({ result }) => {
  return (
    <div
      className="result"
      key={result}
    >
      {result}
    </div>
  )
}

export default Result;
