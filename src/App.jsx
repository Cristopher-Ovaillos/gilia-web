import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useTheme } from './context/ThemeContext';
import AboutUs from "./components/About-us/About-us";
import HomeContainer from './components/HomeContainer/HomeContainer';


function App() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.backgroundColor = theme.token.backgroundColor;
    document.body.style.overflowX = 'hidden';
  }, [theme]);

  return (

    <Router>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Routes>
        <Route path="/home" element={<HomeContainer/> } />
        <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
