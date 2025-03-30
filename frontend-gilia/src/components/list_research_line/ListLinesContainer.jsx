import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { API_BASE_URL } from "../../config/apiConfig";
import "./ListLinesContainer.css";

const ListLineasContainer = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/linea-investigacions/`);
        const result = await response.json();
        console.log("Datos recibidos:", result);

        if (result.data && Array.isArray(result.data)) {
          setData(result.data); 
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-8 sm:px-25 sm:py-10 px-8 py-8">
      {data.map((item) => (
        <div key={item.id} className="bg-gray-200 p-4 custom-card-ldi">
          <h2 className="text-lg font-bold custom-text-list">{item.attributes.nombre}</h2>
          {/* <p className="text-sm custom-autor-list">{item.attributes.autor}</p> */}
          <p className="custom-desp-list">{item.attributes.descripcion}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 custom-btn custom-btn-list">
            Ver Más
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListLineasContainer;
