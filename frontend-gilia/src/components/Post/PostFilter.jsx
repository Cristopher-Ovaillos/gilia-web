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
        className="p-2 border rounded w-full sm:w-auto"
      />
      <select
        name="tipo"
        value={filtro.tipo}
        onChange={handleFiltroChange}
        className="p-2 border rounded w-full sm:w-auto"
      >
        <option value="">Tipo</option>
        <option value="articulo">Artículo</option>
        <option value="conferencia">Conferencia</option>
      </select>
      <input
        type="text"
        name="linea"
        placeholder="Línea"
        value={filtro.linea}
        onChange={handleFiltroChange}
        className="p-2 border rounded w-full sm:w-auto"
      />
    </div>
  );
};

export default PostFilter;