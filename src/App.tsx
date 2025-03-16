import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ContactMe from './components/Main/ContactMe';


function App() {
  return (
    <Router>
    <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact-sahana" element = {<ContactMe />} />
        <Route path="/home" element = {<Main />} />
      </Routes>
    <Footer />
  </Router>
  );
}

export default App;
