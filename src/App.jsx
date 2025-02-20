import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { useTheme } from './context/ThemeContext'; 
import AboutUs from "./components/About-us/About-us";


function App() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.backgroundColor = theme.token.backgroundColor;
    document.body.style.overflowX = 'hidden';
  }, [theme]);


  const renderSectionContent = () => {
    switch (activeSection) {
     
      case 'about-us':
        return <AboutUs/>; ;
   
    }
  };

  return (
    <div>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="content">
        {renderSectionContent()} {/* Esto renderiza el contenido de la sección activa */}
      </div>
    </div>
  );
}

export default App;
