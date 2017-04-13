import {
  FETCH_CAMPS
} from '../actions/types';

const INITIAL_STATE = {
  recdata: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CAMPS:
      return action.payload;
    default:
      return state;
  }
}
