import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined, BulbOutlined, MoonOutlined } from "@ant-design/icons";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [visible, setVisible] = useState(false);
  const [esCelular, setEsCelular] = useState(window.innerWidth < 768);
  const { theme, toggleTheme } = useTheme();

  // Detectar el cambio de tamanio de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setEsCelular(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.setProperty("--background-color", theme.token.backgroundColor);
    document.body.style.setProperty("--itemSelectedColor", theme.token.itemSelectedColor);
    document.body.style.setProperty("--colorTextBase", theme.token.colorTextBase);
  }, [theme]);

  const handleMenuItemClick = (e) => {
    setActiveSection(e.key);
    if (esCelular) {
      setVisible(false); 
    }
  };

  return (
    <div className="Menu-Container" style={{ backgroundColor: theme.token.backgroundColor }}>
      <div className="logo-item">
        <span className="logo-text" style={{ color: theme.token.colorTextBase }}>
          GILIA
        </span>
      </div>

      {esCelular ? (
        <>
          <Button
            className="menu-button"
            type="text"
            icon={<MenuOutlined className="menu-icon" />}
            onClick={() => setVisible(true)}
          />
          <Drawer
            title={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: theme.token.colorTextBase }}>Menú</span>
                <Button
                  type="text"
                  onClick={toggleTheme}
                  icon={theme.token.backgroundColor === "#121212" ? <BulbOutlined /> : <MoonOutlined />}
                />
              </div>
            }
            placement="right"
            onClose={() => setVisible(false)}
            open={visible}
            style={{ backgroundColor: theme.token.backgroundColor }}
          >
            <Menu 
              mode="vertical" 
              onClick={handleMenuItemClick} 
              selectedKeys={[activeSection]} 
              style={{ backgroundColor: theme.token.backgroundColor }}
            >
              <Menu.Item className="Menu-item" key="home">Inicio</Menu.Item>
              <Menu.Item className="Menu-item" key="about">Objetivos</Menu.Item>
              <Menu.Item className="Menu-item" key="publications">Publicaciones</Menu.Item>
              <Menu.Item className="Menu-item" key="projects">Proyectos</Menu.Item>
              <Menu.Item className="Menu-item" key="about-us">¿Quiénes Somos?</Menu.Item>
            </Menu>
          </Drawer>
        </>
      ) : (
        <>
          <Menu 
            className="Menu" 
            mode="horizontal" 
            selectedKeys={[activeSection]} 
            onClick={handleMenuItemClick}  // Cambiar a la función handleMenuItemClick
            style={{ backgroundColor: theme.token.backgroundColor }}
          >
            <Menu.Item className="Menu-item" key="home">Inicio</Menu.Item>
            <Menu.Item className="Menu-item" key="goal">Objetivos</Menu.Item>
            <Menu.Item className="Menu-item" key="publications">Publicaciones</Menu.Item>
            <Menu.Item className="Menu-item" key="projects">Proyectos</Menu.Item>
            <Menu.Item className="Menu-item" key="about-us">¿Quiénes Somos?</Menu.Item>
          </Menu>
          <div className="theme-toggle-container">
            <Button type="text" onClick={toggleTheme} className="theme-toggle-button">
              {theme.token.backgroundColor === "#121212" ? <BulbOutlined /> : <MoonOutlined />}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;