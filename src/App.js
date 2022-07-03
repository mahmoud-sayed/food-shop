import React from 'react';
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
