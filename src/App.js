import React, {Fragment, useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


import './main.css';

function App() {


  return (
    <Fragment>
      <Navbar />
      <Main/>
      <Footer/>
    </Fragment>
  );
}

export default App;
