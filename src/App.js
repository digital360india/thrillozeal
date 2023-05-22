// import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FirstHome from './home/FirstHome';
import Location from './Nainital/Location';
import SubLocation from './SubLocation/SubLocation';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:location_id/:trek_id">
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
