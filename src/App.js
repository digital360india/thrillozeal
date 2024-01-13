import './App.css';
import Home from './home/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Privacy from './Privacy/Privacy';
import OtpPage from "./pages/OtpPage/OtpPage.js";
import NextOtpPage from "./pages/NextOtpPage/NextOtpPage.js";
import TandC from "./pages/TandC/TandC.js";
import WheelPage from "./pages/WheelPage/WheelPage.js";

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
    <>
    <Router>
      <Routes>
      <Route path='/about' element={<AboutUs />}/>
  
      <Route path='/privacy_policy' element={<Privacy />}/>
        <Route path="/:location/:activity/:categories" element={<Location />}/>
        <Route path="/:trek_id" element={<SubLocation />}/>
        <Route path="/" element={<FirstHome />}/>
          <Route path="/spin" element={<OtpPage  />}></Route>
          <Route path="/spin/next" element={<NextOtpPage  />}></Route>
          <Route path="/spin/TandC" element={<TandC  />}></Route>
          <Route path="/spin/spinpage" element={<WheelPage  />}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
