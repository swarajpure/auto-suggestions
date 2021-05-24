import { MIN_QUERY_LENGTH, MESSAGES } from '../constants/constants';

const { MORE_HINTS, START_TYPING } = MESSAGES;

const generateMessage = (searchQuery) => {
  const queryLength = searchQuery.length;

  const isStringLengthSmall = queryLength > 0 && queryLength < MIN_QUERY_LENGTH;
  const isZeroLength = queryLength === 0;

  const message = isStringLengthSmall ? MORE_HINTS
                  : isZeroLength ? START_TYPING 
                  : '';
  return message;
}

export default generateMessage;