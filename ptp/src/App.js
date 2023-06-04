import logo from './logo.svg';
import './App.css';
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrap css lib for react
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
