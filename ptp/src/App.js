import logo from './logo.svg';
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './assets/style.css'; // import customized bootstrap css
// web page components are included below
import Intro from './pages/Intro';
import Application from './pages/application';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Intro} />
          <Route exact path='/application' Component={Application} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
