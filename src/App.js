import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Menu from './Menu';
import Accueil from './Pages/Accueil';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Inscription from './Components/Inscription/Inscription';
import Connexion from './Components/Connexion/Connexion';
function App() {
  return (
    <div className="App">
     
      <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Inscription" element={<Inscription/>} />
          <Route path="/identification" element={<Connexion/>} />
          <Route path="/" element={<Accueil/>} />
        </Routes>
      </div>
    </Router>
    </div>
    
  );
}

export default App;
