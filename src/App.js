import React from 'react';
import './App.css';
import Countries from './Components/Countries/Countries';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Router path="/country/:countryName">
            <CountryDetails/>
          </Router>
          <Route exact path="/">
            <Countries/>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
