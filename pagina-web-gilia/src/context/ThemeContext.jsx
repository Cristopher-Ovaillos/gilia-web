import React, { createContext, useState, useContext } from 'react';
import { lightTheme, darkTheme } from '../Assets/styles/themes'; 

const ThemeContext = createContext();

// Proveedor de contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme); // Estado para el tema

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
