import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { API_BASE_URL } from "../../config/apiConfig";
import PostItem from "./PostItem";
import PostFilter from "./PostFilter";
import PostPagination from "./PostPagination";

const PostList = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState(1);
  const [filtro, setFiltro] = useState({ anio: "", tipo: "", linea: "" });
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
        console.error("Error fetching publicaciones:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPublicaciones();
  }, [pagina, filtro]);

  return (
    <div className="container mx-auto px-4 py-8" style={{ color: theme.token.colorTextBase }}>
      <PostFilter filtro={filtro} setFiltro={setFiltro} setPagina={setPagina} />

      {loading ? (
        <p className="text-center text-gray-500">Cargando publicaciones...</p>
      ) : publicaciones.length === 0 ? (
        <p className="text-center text-gray-500">No hay publicaciones.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {publicaciones.map((pub) => (
            <PostItem key={pub.id} publicacion={pub} />
          ))}
        </ul>
      )}

      <PostPagination pagina={pagina} setPagina={setPagina} totalPaginas={totalPaginas} />
    </div>
  );
};

export default PostList;