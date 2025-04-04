import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BookOutlined, FolderOutlined, TeamOutlined } from "@ant-design/icons"; 
import Loader from "../Loader/Loader";
import { API_BASE_URL } from "../../config/apiConfig";
import { marked } from "marked";
import "./LinesDetailContainer.css";

const ListLineasContainer = () => {
  const [linea, setLinea] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/linea-investigacions/${id}`);
        const data = await response.json();
        setLinea(data);
        console.log("nombre:", data.nombre);
      } catch (error) {
        console.error("Error al obtener la linea de investigacion:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!linea) return <Loader />;

  const descripcionHTML = marked(linea.descripcion);

  return (
    <div className="flex flex-col items-center p-8 min-h-screen w-[90%] mx-auto">
      <h1 className="text-center w-full titulo-linea-investigacion">{linea.nombre}</h1>

      <div className="text-lg leading-relaxed font-light text-justify w-full text-linea-investigacion">
        <div className="sm:prose-xl" dangerouslySetInnerHTML={{ __html: descripcionHTML }} />
      </div>

      <div className="mt-8 w-full text-center border-t border-gray-300 pt-4">
        <p className="text-lg font-semibold mb-2">Explora más sobre esta línea:</p>
        <div className="mt-2 flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/" state={{ linea: linea.nombre }} className="flex items-center gap-2 hover:opacity-75">
            <FolderOutlined className="text-xl" />
            <span className="text-lg font-medium">Ver proyectos</span>
          </Link>
          <Link to="/post" state={{ linea: linea.nombre }} className="flex items-center gap-2 hover:opacity-75">
            <BookOutlined className="text-xl" />
            <span className="text-lg font-medium">Ver publicaciones</span>
          </Link>
          <Link to="/" state={{ linea: linea.nombre }} className="flex items-center gap-2 hover:opacity-75">
            <TeamOutlined className="text-xl" />
            <span className="text-lg font-medium">Ver integrantes</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListLineasContainer;
