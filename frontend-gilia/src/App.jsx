import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useTheme } from './context/ThemeContext';
import AboutUs from "./components/AboutUs/AboutUs";
import HomeContainer from './components/HomeContainer/HomeContainer';
import LineasContainer from './components/LineasContainer/LineasContainer';
import PostsList from './components/Post/PostList';
import PostDetail from './components/Post/PostDetail';

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
        <Route path="/" element={<HomeContainer />} />
        <Route path="/lineas-de-investigacion" element={<LineasContainer />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/post/:id" element={<PostDetail />} /> 
        <Route path="/post" element={<PostsList />} />      
      </Routes>
    </Router>
  );
}

export default App;
