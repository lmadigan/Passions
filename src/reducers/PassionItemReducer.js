import { FETCH_PASSION_ITEMS_SUCCESS, ADD_PASSION } from '../actions/types';

const INITIAL_STATE = {
  passionItems: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PASSION_ITEMS_SUCCESS:
      return { passionItems: action.payload };
    case ADD_PASSION:
      return { state };
    default:
      return state;
  }
};
