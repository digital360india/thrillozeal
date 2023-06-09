import './App.css';
import Home from './home/Home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstHome from './home/FirstHome';
import Location from './Nainital/Location';
import SubLocation from './SubLocation/SubLocation';
import AboutUs from './AboutUs/AboutUs';
import Navbar from './Components/Navbar/Navbar';
import { useEffect } from 'react';
import db from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { useState } from 'react';
import Loading from './Components/Loader/Loading';

function App() {
  const [{ globalVariable, All_Treks }, dispatch] = useStateValue();
  const [allTreks, setAllTreks] = useState([]);

  useEffect(() => {
    db.collection('Cities').onSnapshot(snapshot => {
      snapshot.docs.map(city => {
        db.collection('Cities').doc(city.id).collection('All_Trek').onSnapshot(snapshot => {
          snapshot.docs.map(doc =>
            setAllTreks(prevTrek => [...prevTrek, {
              trek_id: doc.id,
              trek_data: doc.data()
            }])
          );
        });
      });
    });
  }, []);

  useEffect(() => {
    db.collection('GlobalVariable').doc("GlobalVariable").onSnapshot((snapshot) => (
        dispatch({
            type: actionTypes.SET_GLOBAL_VARIABLE,
            globalVariable: snapshot.data(),
        })
    ))
}, []);

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_USE_ALL_TREKS,
      All_Treks: allTreks,
    });
  }, [allTreks])

  return (
    <Router>
      <Switch>
      <Route path='/about'>
      <AboutUs />
      </Route>
        <Route path="/:location/:activity/:styles">
          <Location />
        </Route>
        <Route path="/:trek_id">
          <SubLocation />
        </Route>
        <Route path="/">
          <FirstHome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
