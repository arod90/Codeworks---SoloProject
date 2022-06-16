// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import LoginReg from './components/LoginReg';
import MapSearch from './components/MapSearch';
import Profile from './components/Profile';
import TechStack from './components/TechStack';
import { AuthContextProvider } from './context/AuthContext';
// import { FavContext } from './context/FavContext';

function App() {
  return (
    <AuthContextProvider>
      {/* <FavContext.Provider> */}
      <div className="app-cont">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mapsearch" element={<MapSearch />} />
          <Route path="/loginreg" element={<LoginReg />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/stack" element={<TechStack />} />
        </Routes>
      </div>
      {/* </FavContext.Provider> */}
    </AuthContextProvider>
  );
}

export default App;
