import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined, BulbOutlined, MoonOutlined } from "@ant-design/icons";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";
import { Link } from "react-router-dom";
import asyncMock from "../../../asyncMock"; 

const Navbar = ({ activeSection, setActiveSection }) => {
  const [visible, setVisible] = useState(false);
  const [esCelular, setEsCelular] = useState(window.innerWidth < 768);
  const { theme, toggleTheme } = useTheme();
  const [lineas, setLineas] = useState([]);

  useEffect(() => {
    asyncMock.getAll()
      .then(data => setLineas(data))
      .catch(error => console.error("Error al obtener las líneas:", error));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setEsCelular(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuItemClick = (e) => {
    setActiveSection(e.key);
    if (esCelular) {
      setVisible(false);
    }
  };

  const handleLineas = () => {
    return lineas.map((linea, index) => ({
      key: `linea-${index}`,
      label: (
        <Link 
          to={`/lineas-de-investigacion/${linea.nombre}`} 
          className="link-text"
        >
          {linea.nombre}
        </Link>
      ),
    }));
  };

  const menuItems = [
    { key: "home", label: <Link to="/" className="link-text">Inicio</Link>, className: "Menu-item" },
    {
      key: "projects",
      label: <span className="link-text">Línea de Investigación</span>,
      className: "Menu-item",
      children: handleLineas(),
    },
    { key: "goal", label: <Link to="/" className="link-text">Objetivos</Link>, className: "Menu-item" },
    { key: "publications", label: <Link to="/" className="link-text">Publicaciones</Link>, className: "Menu-item" },
    { key: "extension", label: <Link to="/" className="link-text">Extensión</Link>, className: "Menu-item" },
    { key: "about-us", label: <Link to="/about-us" className="link-text">¿Quiénes Somos?</Link>, className: "Menu-item" },
  ];

  return (
    <div className="Menu-Container">
      <div className="logo-item">
        <span className="logo-text">
          GILIA
        </span>
      </div>

      {esCelular ? (
        <>
          <Button
            className="menu-button"
            type="text"
            icon={<MenuOutlined style={{ marginTop: "40%", fontSize: "22px" }} />}
            onClick={() => setVisible(true)}
          />
          <Drawer
            title={
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
          >
            <Menu
              mode="vertical"
              selectedKeys={[activeSection]}
              onClick={handleMenuItemClick}
              items={menuItems}
            />
          </Drawer>
        </>
      ) : (
        <>
          <Menu
            mode="horizontal"
            selectedKeys={[activeSection]}
            onClick={handleMenuItemClick}
            items={menuItems}
            className="Menu"
            style={{ backgroundColor: theme.token.backgroundColor, flex: 1, overflow: "visible", justifyContent: "end" }}
          />
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

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
};

export default Navbar;
