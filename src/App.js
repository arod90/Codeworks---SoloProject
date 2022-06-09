// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import ApiTest from "./components/ApiTest";
import Dashboard from './components/Dashboard';
import MapSearch from "./components/MapSearch";

function App() {
  return (
    <div className="app-cont">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/mapsearch" element={<MapSearch/>}/>
        <Route path="/testapi" element={<ApiTest/>}/>
      </Routes>
    </div>
  );
}

export default App;
