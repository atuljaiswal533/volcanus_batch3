import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fetch_data from './pages/Fetch_data';
import Form from './pages/Form';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="test">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/fetch_data" element={<Fetch_data />} />
        </Routes>
      </Router>
      <Form />
    </div>
  );
};

export default App;



