import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Team from './Team';
import Contacts from './Contacts';


function App() {

  return (

   <div>
    <Router>

      <nav>
        <Link to="/" className='link'>Home</Link>
        <Link to="/Contacts" className='link'>Contacts</Link>
        <Link to="/Team" className='link'>Team</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contacts" element={<Contacts/>}/>
        <Route path="/Team" element={<Team/>}/>
      </Routes>

    </Router>
   </div>
  )
}

export default App;