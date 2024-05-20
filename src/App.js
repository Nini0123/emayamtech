import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Import your home component
import About from './components/About'; // Import your about component
import Services from './components/Services'; // Import your services component
import Resources from './components/Resources'; // Import your resources component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
