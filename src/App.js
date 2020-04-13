import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Main from './Main'
import Start from './Start'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/main' component={Main} />
        {/* <Route path='/:code' render={(routerProps) => <Charts {...routerProps}/>}/> */}
        <Route path='/' component={Start} />
      </Switch>
    </div>
  );
}

export default App;
