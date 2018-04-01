import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { View, Text } from 'react-native';
import RouterComponent from './Router';
import firebase from 'firebase';
import reducer from './reducers';

class App extends Component {
  componentWillMount() {
    var config = {
        apiKey: "AIzaSyD3a4R8fzeqWYTfScMCPeUVVjy2NoqIAzw",
        authDomain: "passions-c297a.firebaseapp.com",
        databaseURL: "https://passions-c297a.firebaseio.com",
        projectId: "passions-c297a",
        storageBucket: "passions-c297a.appspot.com",
        messagingSenderId: "72394425017"
      };
      firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <RouterComponent />
      </Provider>
    );
  }
}

export default App;

//to debug go to =>
//http://localhost:8081/debugger-ui/
