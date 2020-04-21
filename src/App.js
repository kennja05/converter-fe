import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Main from './Main'
import NavBar from './NavBar'
import HistoricalInfo from './HistoricalInfo'
import AllCountries from './AllCountries'

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
        <NavBar />
        <Switch>
          <Route path='/convert' render={(routerProps) => <Main appStateUpdate={this.infoForHistoricalRates} {...routerProps}/>} />
          <Route path='/historical_info/:code' render={(routerProps) => <HistoricalInfo {...routerProps} />} />
          <Route path='/all_countries' render={(routerProps) => <AllCountries {...routerProps} />} />
        </Switch>
      </div>
    );
  }
  }

export default App;
