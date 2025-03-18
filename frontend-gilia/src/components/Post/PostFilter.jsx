import React from "react";

const PostFilter = ({ filtro, setFiltro, setPagina }) => {
  const handleFiltroChange = (e) => {
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
    setPagina(1);
  };

  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4">
      <input
        type="number"
        name="anio"
        placeholder="Año"
        value={filtro.anio}
        onChange={handleFiltroChange}
        className="p-2 border rounded w-full sm:w-48"
      />
      <select
        name="tipo"
        value={filtro.tipo}
        onChange={handleFiltroChange}
        className="p-2 border rounded w-full sm:w-48"
      >
        <option value="">Tipo</option>
        <option value="Artículo">Artículo</option>
        <option value="Capítulo de Libro">Capítulo de Libro</option>
        <option value="Paper">Paper</option>
        <option value="Informe Técnico">Informe Técnico</option>
        <option value="Tesis">Tesis</option>
        <option value="Libro">Libro</option>
      </select>
      <input
        type="text"
        name="linea"
        placeholder="Línea"
        value={filtro.linea}
        onChange={handleFiltroChange}
        className="p-2 border rounded w-full sm:w-48"
      />
    </div>
  );
};

export default PostFilter;
