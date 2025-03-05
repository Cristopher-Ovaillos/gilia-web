import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./LinesDetailContainer.css";
import Loader from "../Loader/Loader";
import {API_BASE_URL} from "../../config/apiConfig";

const ListLineasContainer = () => {
  const [linea, setLinea] = useState(null); 
  const { id } = useParams(); 

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {

        
        //const response = await fetch(`${API_BASE_URL}/api/research-lines?filters[id][$eq]=${Number(id)}`);
        const response = await fetch(`${API_BASE_URL}/api/research-lines/${id}`);
        const data = await response.json();
        console.log("Datos recibidos s:", data);

      
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

  return (
    <div className="w-[80%] h-[60%] grid grid-cols-1 gap-1 p-4 pb-1.5 m-auto custom-container-lineDetail sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
      <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center justify-center text-xl text-center sm:text-center">
        <p className="custom-name-lineDetail">{linea.name}</p>
        <p className="custom-autor-lineDetail">{linea.autor}</p>
        <p className="custom-contenido-lineDetail">{dividirContenido(linea.description, 1)}</p>
      </div>
      <div className="col-span-1 flex items-center justify-center text-xl w-[70%] mx-auto mt-1">
        <img className="custom-img" src={`${API_BASE_URL}${linea.image?.url}`} alt="Imagen" />
      </div>
      <div className="col-span-1 flex items-center justify-center text-xl w-[70%] mx-auto mt-1">
        <img className="custom-img" src={`${API_BASE_URL}${linea.image2?.url}`} alt="Imagen2" />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-2 flex items-center justify-center text-xl text-center sm:text-center">
        <p className="custom-contenido-lineDetail">{dividirContenido(linea.description, 2)}</p>
      </div>
    </div>
  );
};

const dividirContenido = (texto, parte) => {
  const palabras = texto.split(" ");
  const mitad = Math.ceil(palabras.length / 2);
  const textoCortado = palabras.slice(0, mitad).join(" ");
  const indexPunto = texto.indexOf(".", textoCortado.length);

  if (indexPunto !== -1) {
    return parte === 1 ? texto.slice(0, indexPunto + 1) : texto.slice(indexPunto + 2);
  }

  return parte === 1 ? texto : "";
};

export default ListLineasContainer;
