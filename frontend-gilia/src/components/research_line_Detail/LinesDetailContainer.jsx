import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { API_BASE_URL } from "../../config/apiConfig";
import { marked } from "marked";  
import { useTheme } from "../../context/ThemeContext"; // Usamos el contexto del tema

const ListLineasContainer = () => {
  const { theme } = useTheme(); // Obtenemos el tema actual
  const [linea, setLinea] = useState(null); 
  const { id } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/linea-investigacions/${id}`);
        const data = await response.json();
        setLinea(data); 
      } catch (error) {
        console.error("Error al obtener la línea de investigación:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!linea) return <Loader />;

  const descripcionHTML = marked(linea.descripcion);

  return (
    <div
      className="flex flex-col items-center p-8 min-h-screen"
      style={{
        backgroundColor: theme.token.backgroundColor, // Fondo según el tema
        color: theme.token.colorTextBase, // Color de texto según el tema
  
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: `inset 0 0 20px ${theme.token.shadowtop}` // Sombra suave en el fondo
      }}
    >
      <p
        className="text-4xl font-bold text-center mb-6 uppercase tracking-wider"
        style={{
          color: theme.token.colorTextBase, // Título en el color del tema
          textShadow: `0 0 10px ${theme.token.shadowtop}, 0 0 15px ${theme.token.shadowtop}` // Sombra sutil para el texto
        }}
      >
        {linea.nombre}
      </p>

      <div
        className="w-full max-w-4xl text-lg leading-relaxed font-light text-justify"
        style={{
          color: theme.token.colorTextBase, // Color de texto en el contenido
          textShadow: `0 0 5px ${theme.token.shadowtop}, 0 0 10px ${theme.token.shadowtop}`, // Sombra en el texto
        }}
      >
        <div
          className="prose prose-lg sm:prose-xl"
          dangerouslySetInnerHTML={{ __html: descripcionHTML }} 
        />
      </div>

      <div
        className="mt-6 w-full max-w-4xl"
        style={{
          borderTop: `3px solid ${theme.token.borderColor}`, // Borde superior decorativo
          paddingTop: "20px",
          textAlign: "center",
          color: theme.token.accentColor, // Color de acento para detalles
          fontSize: "1.25rem"
        }}
      >
       
      </div>
    </div>
  );
};

export default ListLineasContainer;
