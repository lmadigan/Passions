import { FETCH_PASSION_ITEMS_SUCCESS, ADD_PASSION } from './types';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export const fetchPassions = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/passions`)
    .on('value', snapshit => {
      dispatch({ type: FETCH_PASSION_ITEMS_SUCCESS, payload: snapshot.val()});
    });
  };
};

export const addPassion = ({ passion }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/passions`)
    .push({ passion })
    .then(() => {
      dispatch({ type: ADD_PASSIONS });
    });
  };
};
