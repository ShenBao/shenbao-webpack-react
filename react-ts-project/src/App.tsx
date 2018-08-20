import * as React from 'react';
import './App.scss';


import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './layouts/header'
import Error from './views/error';
import Home from './views/home';
import Login from './views/login';
import Main from './views/main';
import Register from './views/register';

import store from './store';

class App extends React.Component {
  public render() {

    console.log('React Router Redux TypeScript Project');

    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <h1 className="title">React Router Redux TypeScript Project</h1>
              <Header />
              <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/login' exact={true} component={Login} />
                <Route path='/register' exact={true} component={Register} />
                <Route path='/main' exact={true} component={Main} />
                <Route component={Error} />
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
