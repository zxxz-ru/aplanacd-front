import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import HomePage from './components/home/HomePage';
import CreateDiskPage from './components/disk/CreateDiskPage';


class App extends Component {

  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (

      // <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={HomePage}></Route>
            <Route path="/disk/create" component={CreateDiskPage}></Route>
            <Route path="/"></Route>
          </Switch>
        </BrowserRouter>
      // </div>
    );
  }
}

export default App;
