import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";

import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import HomeContainer from './components/Home/HomeContainer';
import LinesDetailContainer from "./components/research_line_Detail/LinesDetailContainer";
import ListLineasContainer from "./components/list_research_line/ListLinesContainer";
import PostsList from './components/Post/PostList';
import PostDetail from './components/Post/PostDetail';
import Objectives from './components/Objectives/Objectives';
import Extension from './components/Extension/Extension';

import "./App.css"

function App() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    Object.entries(theme.token).forEach(([key, value]) => {
      document.body.style.setProperty(`--${key}`, value);
    });
    document.body.style.ovreflowX = "hidden";
  }, [theme]);

  return (
    <Router>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Routes>
        <Route path="/" element={<HomeContainer />} />

        <Route path="/lineas-de-investigacion" element={<ListLineasContainer />} />
        <Route path="/lineas-de-investigacion/:id" element={<LinesDetailContainer />} />

        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/post" element={<PostsList />} />
        <Route path="/objectives" element={<Objectives />} />
        <Route path="/extension" element={<Extension />} />       
        <Route path="/about-us" element={<AboutUs />} />

      </Routes>
    </Router>
  );
}

export default App;
