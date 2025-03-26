import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { API_BASE_URL } from "../../config/apiConfig";
import { marked } from "marked";  
import "./LinesDetailContainer.css";

const ListLineasContainer = () => {
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
    <div className="flex flex-col items-center p-8 min-h-screen w-[90%] mx-auto " >
      <p className="text-center  w-full titulo-linea-investigacion">{linea.nombre}</p>

      <div className=" text-lg leading-relaxed font-light text-justify w-[100%] text-linea-investigacion">
        <div className=" sm:prose-xl" dangerouslySetInnerHTML={{ __html: descripcionHTML }} />
      </div>

    </div>
  );
};

export default ListLineasContainer;