import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useTheme } from '../context/ThemeContext'; // Importa el hook useTheme
import { lightTheme, darkTheme } from '../Assets/styles/themes'; // Asegúrate de que la ruta sea correcta
import "./Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [esCelular, setEsCelular] = useState(window.innerWidth < 768);
  const { theme, toggleTheme } = useTheme(); // Accede al tema y a la funcion para cambiarlo

  // Detectar el cambio de tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => { setEsCelular(window.innerWidth < 768); };
    window.addEventListener("resize", handleResize); // Escucha el cambio de resolucion
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.setProperty('--primary-color',  theme.token.colorTextBase );
    document.body.style.setProperty('--background-color', theme.token.backgroundColor);
  }, [theme]);

  return (
    <div className="Menu-Container" style={{ backgroundColor: theme.token.backgroundColor }}>
      <div className="logo-item">
        <span className="logo-text" style={{ color: theme.token.colorTextBase }}>
          GILIA
        </span>
      </div>

      <Button type="text"onClick={toggleTheme} style={{ position: 'absolute', top: '10px', right: '10px' }}>T</Button>

      {esCelular ? (
        <>
          <Button className="menu-button" type="text" icon={<MenuOutlined />} onClick={() => setVisible(true)} />
          <Drawer title="Menú" placement="right" onClose={() => setVisible(false)} open={visible}>
            <Menu mode="vertical" onClick={() => setVisible(false)}>
              <Menu.Item key="home">Inicio</Menu.Item>
              <Menu.Item key="about">Objetivos</Menu.Item>
              <Menu.Item key="publications">Publicaciones</Menu.Item>
              <Menu.Item key="projects">Proyectos</Menu.Item>
              <Menu.Item key="about-us">¿Quiénes Somos?</Menu.Item>
            </Menu>
          </Drawer>
        </>
      ) : (
        <Menu className="Menu" mode="horizontal" defaultSelectedKeys={["home"]}  style={{ backgroundColor: theme.token.backgroundColor}}>
          <Menu.Item className="Menu-item" key="home" >Inicio</Menu.Item>
          <Menu.Item className="Menu-item" key="about">Objetivos</Menu.Item>
          <Menu.Item className="Menu-item" key="publications">Publicaciones</Menu.Item>
          <Menu.Item className="Menu-item" key="projects">Proyectos</Menu.Item>
          <Menu.Item className="Menu-item" key="about-us">¿Quiénes Somos?</Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
