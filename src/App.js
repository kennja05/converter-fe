import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Main from './Main'
import Start from './Start'
import HistoricalInfo from './HistoricalInfo'

class App extends React.Component {
  
  state = {
    amount: '',
    base: '',
    target: ''
  }

  infoForHistoricalRates = (stateObjFromMain) => {
    this.setState({
      amount: stateObjFromMain.amount,
      base: stateObjFromMain.startingCountry,
      target: stateObjFromMain.endingCountry
    })
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route path='/main' render={() => <Main appStateUpdate={this.infoForHistoricalRates} />} />
          <Route path='/historical_info/:code' render={(routerProps) => <HistoricalInfo {...routerProps} />} />
          <Route path='/' component={Start} />
        </Switch>
      </div>
    );
  }
  }

export default App;
