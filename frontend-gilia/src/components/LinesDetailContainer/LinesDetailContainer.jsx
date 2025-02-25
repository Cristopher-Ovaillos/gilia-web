import { useParams } from "react-router-dom";
import asyncMock from "../../../asyncMock";
import { useState, useEffect } from "react";
import "./LinesDetailContainer.css";
import Loader from "../Loader/Loader";

const ListLineasContainer = () => {
  const [linea, setLinea] = useState(null); // Inicializa en null para evitar errores
  const { name } = useParams();

  useEffect(() => {
    let isMounted = true;

    asyncMock.getOne(name)
      .then(data => {
        if (isMounted) {
          console.log(data);
          setLinea(data);
        }
      })
      .catch(error => console.error("Error:", error));

    return () => {
      isMounted = false;
    };
  }, [name]);

  if (!linea) return <Loader />;

  return (
    <div className="w-[90%] h-[60%] grid grid-cols-1 gap-1 p-4 m-auto custom-container-lineDetail sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-3">
      <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center justify-center text-xl">
        <p className="custom-name-lineDetail">{linea.nombre}</p>
        <p className="custom-autor-lineDetail">{linea.autor}</p>
        <p className="custom-contenido-lineDetail">{dividirContenido(linea.contenido, 1)}</p>
      </div>
      <div className="col-span-1 flex items-center justify-center text-xl w-[70%] mx-auto mt-1">
        <img className="custom-img" src={linea.img} alt="Imagen" />
      </div>
      <div className="col-span-1 flex items-center justify-center text-xl w-[70%] mx-auto mt-1">
        <img className="custom-img" src={linea.img} alt="Imagen" />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-2 flex items-center justify-center text-xl">
        <p className="custom-contenido-lineDetail">{dividirContenido(linea.contenido, 2)}</p>
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
