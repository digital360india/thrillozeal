import React, { useState, useEffect } from "react";
import "./FirstHome.css";
import "./FirstHomeAnimation.css";
import logo from "./img/logo.png";
import call from "./img/phone-call.png";
import background1 from "./img/campingBackground.webp";
import background2 from "./img/raftingBackground.webp";
import background3 from "./img/skiingBackground.webp";
import background4 from "./img/toursBackground.webp";
import background5 from "./img/trekkingBackground.webp";
import background6 from "./img/exploreFunBackground.webp";
import divider from "./img/Line 2.png";
import arrow from "./img/Arrow 1.png";
import icon1 from "./img/camping.png";
import icon2 from "./img/rafting.png";
import icon3 from "./img/skiing.png";
import icon4 from "./img/tours.png";
import icon5 from "./img/trekking.png";
import icon6 from "./img/exploreFun.png";
import background1theme from "./img/Ellipse 1 (5).png";
import background2theme from "./img/Ellipse 1.png";
import background3theme from "./img/Ellipse 1 (4).png";
import background4theme from "./img/Ellipse 1 (2).png";
import background5theme from "./img/Ellipse 1 (1).png";
import background6theme from "./img/Ellipse 1 (3).png";
import facebookIcon from "./img/facebook_icon.png";
import twitterIcon from "./img/twitter_icon.png";
import linkedinIcon from "./img/linkedin_icon.png";
import menu from "./img/menu.png";
import Secondpage from "./Secondpage";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import Destination from "../Components/Destinations/Destination";
import Footer from "../Components/Footer/Footer";
import ExploreCities from "./ExploreCities";
import Testimonials from "./Testimonials";
import Add from "./Add";
import Add2 from "./Add2";
import Travel from "../Main/Travel";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Nainital/Header";
import { actionTypes } from "../reducer";
import db from "../firebase";
import {
  KeyboardArrowDownOutlined as KeyboardArrowDownOutlinedIcon,
  LocationOnOutlined as LocationOnOutlinedIcon,
  SearchOutlined as SearchOutlinedIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";

import Loading from "../Components/Loader/Loading";