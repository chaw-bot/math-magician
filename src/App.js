import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Header from './pages/Header';
import Home from './pages/Home';
import Quote from './pages/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quotes">
            <Quote />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
