import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Consultation from './pages/Consultation';
import Installation from './pages/Installation';
import JoinTeam from './pages/JoinTeam';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/join-team" element={<JoinTeam />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
