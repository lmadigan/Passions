import { FETCH_PASSION_ITEMS_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  passionItems: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PASSION_ITEMS_SUCCESS:
      return { ...state, passionItems: action.payload }
    default:
      return state;
  }
};
