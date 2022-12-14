// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FirstHome from './home/FirstHome';
import Location from './Nainital/Location';
import SubLocation from './SubLocation/SubLocation';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/:location/:name/:price">
          <SubLocation/>
        </Route>
        <Route path="/:location">
          <Location/>
        </Route>
        <Route path="/">
          <FirstHome/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
