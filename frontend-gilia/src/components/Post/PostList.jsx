import { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { API_BASE_URL } from '../../config/apiConfig';

const PostList = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState(1);
  const [filtro, setFiltro] = useState({ anio: '', tipo: '', linea: '' });
  const [totalPaginas, setTotalPaginas] = useState(1);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchPublicaciones = async () => {
      setLoading(true);
      try {
        const query = new URLSearchParams({
          _page: pagina,
          _limit: 10,
          anio: filtro.anio,
          tipo: filtro.tipo,
          linea: filtro.linea,
        }).toString();
        const response = await fetch(`${API_BASE_URL}/api/publicacions?${query}`);
        const data = await response.json();
        setPublicaciones(data.data || []);
        setTotalPaginas(data.totalPages || 1);
      } catch (err) {
        console.error('Error fetching publicaciones:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPublicaciones();
  }, [pagina, filtro]);

  const handleFiltroChange = (e) => {
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
    setPagina(1);
  };

  return (
    <div className="container mx-auto px-4 py-8" style={{ color: theme.token.colorTextBase }}>
      <div className="mb-6 flex gap-4">
        <input type="number" name="anio" placeholder="Año" value={filtro.anio} onChange={handleFiltroChange} className="p-2 border rounded" />
        <select name="tipo" value={filtro.tipo} onChange={handleFiltroChange} className="p-2 border rounded">
          <option value="">Tipo</option>
          <option value="articulo">Artículo</option>
          <option value="conferencia">Conferencia</option>
        </select>
        <input type="text" name="linea" placeholder="Línea" value={filtro.linea} onChange={handleFiltroChange} className="p-2 border rounded" />
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Cargando publicaciones...</p>
      ) : (
        <div>
          {publicaciones.length === 0 ? (
            <p className="text-center text-gray-500">No hay publicaciones.</p>
          ) : (
            <ul>
              {publicaciones.map((pub) => (
                <li key={pub.id} className="border-b py-4">
                  <h3 className="text-lg font-semibold">{pub.titulo}</h3>
                  <p className="text-sm">{pub.autores} - {pub.anio}</p>
                  <p className={`text-sm ${pub.tipo === 'articulo' ? 'text-blue-500' : 'text-green-500'}`}>{pub.tipo}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <button disabled={pagina === 1} onClick={() => setPagina(pagina - 1)} className="p-2 border rounded">Anterior</button>
        <span>Página {pagina} de {totalPaginas}</span>
        <button disabled={pagina === totalPaginas} onClick={() => setPagina(pagina + 1)} className="p-2 border rounded">Siguiente</button>
      </div>
    </div>
  );
};

export default PostList;
