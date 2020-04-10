import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Main from './Main'
import Charts from './Charts'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/homepage' component={Main} />
        <Route path='/chart/:code' component={Charts} />
      </Switch>
    </div>
  );
}

export default App;
