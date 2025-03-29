import React from "react";

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
        onChange={handleFiltroChange} // Llamamos a la funcion cuando cambia el valor
        className="p-2 border rounded w-full sm:w-48" 
      />
 
      <select
        name="tipo" 
        value={filtro.tipo || ""} 
        onChange={handleFiltroChange} // llamamos a la funcion cuando cambia el valor
        className="p-2 border rounded w-full sm:w-48" 
      >
        <option value="">Tipo</option>
      
        <option value="Articulo">Articulo</option>
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
        onChange={() => {}} 
        className="p-2 border rounded w-full sm:w-48" 
       
      />
    </div>
  );
};

export default PostFilter;
