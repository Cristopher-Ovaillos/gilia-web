import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../config/apiConfig";
import { marked } from "marked";
import Loader from "../Loader/Loader";
import "./ProyectoDetail.css"; // Solo para la fuente Playwrite

const ProyectoDetail = () => {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState(null);

  useEffect(() => {
    const fetchProyecto = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/proyectos/${id}`);
        const data = await response.json();
        setProyecto(data.proyecto);
    
      
        
      } catch (error) {
        console.error("Error al obtener el proyecto:", error);
      }
    };

    fetchProyecto();
  }, [id]);

  if (!proyecto) return <Loader />;

  const nombre= proyecto.nombre;
  const descripcion= proyecto.descripcion;
 

  const descripcionHTML = marked(descripcion || "");


  return (
    <div className="font-josefin px-6 py-12 max-w-4xl mx-auto leading-relaxed">
      <h1 className="text-4xl text-center mb-8 font-bold font-playwrite">
        {nombre}
      </h1>


      <div
        className="prose prose-lg max-w-none text-justify"
        dangerouslySetInnerHTML={{ __html: descripcionHTML }}
      />
    </div>
  );
};

export default ProyectoDetail;
