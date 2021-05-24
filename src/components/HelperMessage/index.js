import './styles.css';

const HelperMessage = ({ message }) => {
  return (
    <>
      { message && <p className="message">{message}</p>}
    </>
  )
}

export default HelperMessage;