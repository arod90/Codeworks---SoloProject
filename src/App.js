// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import LoginReg from './components/LoginReg';
import MapSearch from './components/MapSearch';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-cont">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mapsearch" element={<MapSearch />} />
        <Route path="/loginreg" element={<LoginReg />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
