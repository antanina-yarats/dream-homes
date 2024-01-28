import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Team from './Team';
import Contacts from './Contacts';
import Home from './Home';



function App () {

  return (
   <div>
    <Router>
      <nav>
        <Link to="/" className='link'>Home</Link>
        <Link to="/Team" className='link'>Team</Link>
        <Link to="/Contacts" className='link'>Contacts</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Team" element={<Team/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
      </Routes>
      
    </Router>
   </div>
  )
}

export default App;