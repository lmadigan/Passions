import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';


const RouterComponent = () => {
  return (
    <Router>
    <Scene key="root" hideNavBar>

      <Scene key="auth" >
        <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>

        <Scene key="main">
          <Scene key="homepage" component={HomePage} title="Welcome" initial/>
        </Scene>

    </Scene>
    </Router>
  );
};

export default RouterComponent;