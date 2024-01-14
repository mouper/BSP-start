import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Background>
      <Router> 
        <Navbar />
        <Routes> 
          <Route path='/' exact />
        </Routes>
      </Router>
    </Background>
  );
}

export default App;
