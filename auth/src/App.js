import React from 'react';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
const generateClassName = createGenerateClassName({
  productionPrefix: 'authApp',
});
export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signup" component={SignUp} />
            <Route exact path="/auth/signin" component={SignIn} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
