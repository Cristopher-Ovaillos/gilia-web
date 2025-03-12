import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./LinesDetailContainer.css";
import Loader from "../Loader/Loader";
import { API_BASE_URL } from "../../config/apiConfig";
import { marked } from "marked";  

const ListLineasContainer = () => {
  const [linea, setLinea] = useState(null); 
  const { id } = useParams(); 

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/linea-investigacions/${id}`);
        const data = await response.json();
        console.log("Datos recibidos:", data);
        setLinea(data); 
      } catch (error) {
        console.error("Error al obtener la línea de investigación:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (!linea) return <Loader />;

 
  const descripcionHTML = marked(linea.descripcion);

  return (
    <div className="w-[80%] h-[60%] grid grid-cols-1 gap-1 p-4 pb-1.5 m-auto custom-container-lineDetail sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
      <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center justify-center text-xl text-center sm:text-center">
        <p className="custom-name-lineDetail">{linea.nombre}</p>
        {/* Contenedor flexible con la imagen al costado del texto */}
        <div className="flex flex-col sm:flex-row items-center justify-start">
          <div className="text-content">
            <div
              className="custom-contenido-lineDetail"
              dangerouslySetInnerHTML={{ __html: descripcionHTML }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListLineasContainer;
