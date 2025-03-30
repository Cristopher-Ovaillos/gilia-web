import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config/apiConfig'; 
import "./Extension.css";
const LineaExtensionList = () => {
  const [lineas, setLineas] = useState([]);

  useEffect(() => {
    const fetchLineasExtension = async () => {
      const response = await fetch(`${API_BASE_URL}/api/linea-extensions/`);
      const data = await response.json();
      console.log("EXTENSION");
      setLineas(data.data);
      console.log("url : ", `${API_BASE_URL}${data.data[0].imagen.url}`);
      
      
    };
    fetchLineasExtension();
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold">Líneas de Extensión</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {lineas.map((linea) => (
          <div key={linea.id} className="card border rounded-lg p-4">
            <img
             src={`${API_BASE_URL}${linea.imagen.url}`} 
              alt={linea.nombre}
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold">{linea.nombre}</h3>
            <p className="text-sm">{linea.descripcion.slice(0, 100)}...</p>
            <Link
              to={`/linea-extension/${linea.id}`}
              className="text-blue-500 mt-2 inline-block"
            >
              Ver mas
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineaExtensionList;
