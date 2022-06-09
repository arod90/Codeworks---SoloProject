// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Attractions from './components/Attractions';
import Dashboard from './components/Dashboard';
import MapSearch from './components/MapSearch';
import Restaurants from './components/Restaurants';
import Hotels from './components/Hotels';

function App() {
  return (
    <div className="app-cont">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mapsearch" element={<MapSearch />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </div>
  );
}

export default App;
