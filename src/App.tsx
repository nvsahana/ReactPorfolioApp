import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ContactMe from './components/Main/ContactMe';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';


function App() {
  return (
    <Router>
    <ScrollProgress />
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
