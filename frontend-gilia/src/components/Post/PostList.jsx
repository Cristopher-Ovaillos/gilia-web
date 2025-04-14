import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { API_BASE_URL } from "../../config/apiConfig";
import PostItem from "./PostItem";
import PostFilter from "./PostFilter";
import PostPagination from "./PostPagination";
import { useLocation } from "react-router-dom";

const PostList = () => {
  const { state } = useLocation(); // Accede al estado de navegación
  const linea = state?.linea || ""; // Obtén el valor de 'linea' del estado
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState(1);
  const [filtro, setFiltro] = useState({ anio: "", tipo: "", linea: linea }); // Inicia el filtro con 'linea'
  const [totalPaginas, setTotalPaginas] = useState(1);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchPublicaciones = async () => {
      setLoading(true);
      try {
        const queryParams = {
          "pagination[page]": pagina,
          "pagination[pageSize]": 10,
          sort: "createdAt:desc",
        };

        if (filtro.anio) {
          queryParams["filters[anio][$eq]"] = filtro.anio;
        }
        if (filtro.tipo) {
          queryParams["filters[tipo][$eq]"] = filtro.tipo;
        }
        if (filtro.linea) {
          console.log("Filtrando por línea:", filtro.linea);
          queryParams["filters[linea_investigacions][nombre][$containsi]"] = filtro.linea;
        }

        const query = new URLSearchParams(queryParams).toString();
        const response = await fetch(`${API_BASE_URL}/api/publicacions?${query}`);
        const data = await response.json();

        setPublicaciones(data.data || []);
        setTotalPaginas(data.meta?.pagination?.pageCount || 1);
      } catch (err) {
        console.error("Error fetching publicaciones:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPublicaciones();
  }, [pagina, filtro]); // Reemplaza 'filtro' con la nueva línea como parte de la dependencia

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-8" style={{ color: theme.token.colorTextBase }}>
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
