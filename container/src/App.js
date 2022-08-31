import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthApp from './components/AuthApp';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'App',
});
export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={MarketingApp} />
            <Route path="/auth" component={AuthApp} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
