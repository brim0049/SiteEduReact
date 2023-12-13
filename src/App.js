import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Menu from './Menu';
import AccueilViewModel from './ViewModels/AccueilViewModel';
import AboutViewModel from './ViewModels/AboutViewModel';
import ContactViewModel from './ViewModels/ContactViewModel';
import Demande from './Pages/Demande';
import Consult from './Pages/Consult';
import Inscription from './Components/Inscription/Inscription';
import Connexion from './Components/Connexion/Connexion';
function App() {
  return (
    <div className="App">
     
      <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/About" element={<AboutViewModel/>} />
          <Route path="/Contact" element={<ContactViewModel/>} />
          <Route path="/Inscription" element={<Inscription/>} />
          <Route path="/identification" element={<Connexion/>} />
          <Route path="/demande" element={<Demande/>} />
          <Route path="/" element={<AccueilViewModel/>} />
          <Route path="/Consult" element={<Consult/>} />
        </Routes>
      </div>
    </Router>
    </div>
    
  );
}

export default App;
