import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { useTheme } from './context/ThemeContext'; 
import Section from './components/Section';  // Importamos el componente Section

function App() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.backgroundColor = theme.token.backgroundColor;
    document.body.style.overflowX = 'hidden';
  }, [theme]);

  const renderSectionContent = () => {
    switch (activeSection) {
      case "home":
        return <Section title="Inicio">Contenido de la página de inicio</Section>;
      case "goal":
        return <Section title="Objetivos">Contenido de los objetivos</Section>;
      case "publications":
        return <Section title="Publicaciones">Contenido de publicaciones</Section>;
      case "projects":
        return <Section title="Proyectos">Contenido de proyectos</Section>;
      case "about-us":
        return <Section title="¿Quiénes Somos?">Contenido de la sección ¿Quiénes Somos?</Section>;
      default:
        return <Section title="Error">Contenido no disponible</Section>;
    }
  };

  return (
    <div>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="content">
        {renderSectionContent()}
      </div>
    </div>
  );
}

export default App;
