import { useState, useEffect } from "react";
import asyncMock from "../../../asyncMock";

 const  ListLineasContainer = ()  => {
  const [lineas, setLineas] = useState([]);

  useEffect(() => {
    asyncMock.getAll()
      .then(data => setLineas(data))
      .catch(error => console.error("Error al obtener las líneas:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-8 sm:px-25 sm:py-10 px-8 py-8">
      {lineas.map((linea, index) => (
        <div key={index} className="bg-gray-200 p-4 custom-card-ldi">
          <h2 className="text-lg font-bold custom-text-list">{linea.nombre}</h2>
          <p className="text-sm custom-autor-list ">{linea.autor}</p>
          <p className="custom-desp-list">{linea.contenido}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 custom-btn custom-btn-list">Ver Más</button>
        </div>
      ))}
    </div>
  );
}

export default ListLineasContainer