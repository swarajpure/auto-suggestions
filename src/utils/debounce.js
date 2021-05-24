import { DEBOUNCE_DELAY } from '../constants/constants';

let timerId;

const debounce = (func, delay = DEBOUNCE_DELAY) => {
  clearTimeout(timerId);
  timerId = setTimeout(func, delay);
}

export default debounce;