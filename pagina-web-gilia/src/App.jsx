import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { useTheme } from './context/ThemeContext'; // Importa solo useTheme

function App() {
  const { theme } = useTheme();
  useEffect(() => { document.body.style.backgroundColor = theme.token.backgroundColor; document.body.style.overflowX = 'hidden';}, [theme]); 
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
