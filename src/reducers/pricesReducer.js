import { FETCH_PRICES } from '../actions/types';

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRICES:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}