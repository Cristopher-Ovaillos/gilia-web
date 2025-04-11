import React from "react";
import "./Post.css";
const PostFilter = ({ filtro, setFiltro, setPagina }) => {
  //funcion  q se encarga de actualizar el filtro y reiniciar la pagina solo CUANDO cambia
  const handleFiltroChange = (e) => {
    /* Crea un nuevo objeto con las mismas propiedades de 
    filtro, pero reemplaza el valor de la propiedad anio por el nuevo valor que el usuario ha ingresado*/
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
    // esto es para reiniciar la pagina
    setPagina(1);
  };

  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4">
    <input
      type="number"
      name="anio"
      placeholder="Año"
      value={filtro.anio || ""}
      onChange={handleFiltroChange} 
      className="inputField"
    />
  
    <select
      name="tipo"
      value={filtro.tipo || ""}
      onChange={handleFiltroChange}
      className="inputField"
    >
      <option value="">Tipo</option>
      <option value="Artículo">Artículo</option>
      <option value="Capitulo de Libro">Capitulo de Libro</option>
      <option value="Paper">Paper</option>
      <option value="Informe Tecnico">Informe Tecnico</option>
      <option value="Tesis">Tesis</option>
      <option value="Libro">Libro</option>
    </select>
  
    <input
      type="text"
      name="linea"
      placeholder="Linea"
      value={filtro.linea || ""}
      onChange={handleFiltroChange}
      className="inputField"
    />
  </div>
  
  );
};

export default PostFilter;
