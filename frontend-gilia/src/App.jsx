import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useTheme } from "./context/ThemeContext";
import AboutUs from "./components/AboutUs/AboutUs";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import LinesDetailContainer from "./components/LinesDetailContainer/LinesDetailContainer"; // Importa el detalle
import ListLineasContainer  from "./components/ListLinesContainer/ListLinesContainer";
import "./App.css";


function App() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    Object.entries(theme.token).forEach(([key, value]) => {
      document.body.style.setProperty(`--${key}`, value);
    });
    document.body.style.overflowX = "hidden";
  }, [theme]);

  return (
    <Router>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/lineas-de-investigacion" element={<ListLineasContainer />} />
        <Route path="/lineas-de-investigacion/:name" element={<LinesDetailContainer />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
