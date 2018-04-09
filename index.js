import { AppRegistry } from 'react-native';
import App from './src/App';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './src/reducers';

AppRegistry.registerComponent('Passions', () => App);

export const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

//http://localhost:8081/debugger-ui/
