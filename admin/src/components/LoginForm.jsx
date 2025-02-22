import { useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const isMobile = useIsMobile();
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("LOGIN FORM:   Enviando datos:", { username, password }); // Verificamos los datos enviados

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      console.log("LOGIN FORM:   Respuesta del servidor:", response.status);

      const data = await response.json();
      console.log("Datos recibidos:", data);

      if (response.ok) {
        console.log("Usuario autenticado:", data);
        localStorage.setItem("token", data.access_token); // Guardar el token para futuras solicitudes
      } else {
        setErrorMessage(data.message || "Credenciales incorrectas.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setErrorMessage("Hubo un problema al conectar con el servidor.");
    }
  };

  return (
    <div className={`${styles.container} ${isMobile ? styles.mobile : styles.desktop}`}>
      <div className={`${styles.card} ${isMobile ? styles.mobileCard : styles.desktopCard}`}>
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm">Nombre de usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
