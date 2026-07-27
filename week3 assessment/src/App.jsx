import { Routes, Route } from 'react-router-dom';
import { TravelProvider } from './context/TravelContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PassportPage from './pages/PassportPage';
import MapPage from './pages/MapPage';
import Achievements from './pages/Achievements';

function App() {
  return (
    <TravelProvider>
      <div className="app-shell">
        <Navbar />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/passport" element={<PassportPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </main>
      </div>
    </TravelProvider>
  );
}

export default App;
