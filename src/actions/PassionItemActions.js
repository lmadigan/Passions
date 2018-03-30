import { FETCH_PASSION_ITEMS_SUCCESS } from './types';
import { Actions } from 'react-native-router-flux';

export const fetchPassions = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/passions`)
    .on('value', snapshit => {
      dispatch({ type: FETCH_PASSION_ITEMS_SUCCESS, payload: snapshot.val()});
    });
  };
};
