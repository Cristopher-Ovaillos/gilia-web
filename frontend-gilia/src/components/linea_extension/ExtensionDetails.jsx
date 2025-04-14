import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { marked } from "marked";
import Loader from "../Loader/Loader";
import { API_BASE_URL } from "../../config/apiConfig";
import { FolderOutlined, BookOutlined } from "@ant-design/icons";
import "./Extension.css";

const LineaExtensionDetail = () => {
  const { id } = useParams();
  const [linea, setLinea] = useState(null);
  // Controla la visualización de la lista de proyectos
  const [showProjects, setShowProjects] = useState(false);
  // Ref para la lista de proyectos
  const projectListRef = useRef(null);

  useEffect(() => {
    const fetchLineaExtensionDetail = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/linea-extensions/${id}`);
        if (!response.ok) throw new Error("Error al cargar los datos");
        const data = await response.json();
        setLinea(data.data);

      } catch (error) {
        console.error(error);
      }
    };
    fetchLineaExtensionDetail();
  }, [id]);

  if (!linea) return  <Loader/>;

  const descripcionHTML = marked(linea.descripcion || "");


  const handleToggleProjects = () => {
    const newState = !showProjects;
    setShowProjects(newState);

    if (!showProjects) {

      setTimeout(() => {
        if (projectListRef.current) {
          projectListRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-6 py-8">

      <h2 className="text-3xl font-bold mb-4 border-b pb-2">{linea.nombre}</h2>
      <div className="text-lg mb-6" dangerouslySetInnerHTML={{ __html: descripcionHTML }} />

      {linea.instituciones && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Escuelas e Instituciones</h3>
          <p className="text-base">{linea.instituciones}</p>
        </div>
      )}


      <div className="mt-8 w-full text-center border-t border-gray-300 pt-4">
        <p className="text-lg font-semibold mb-2">Explora más sobre esta línea:</p>
        <div className="mt-2 flex flex-col sm:flex-row justify-center gap-6">

          <button
            onClick={handleToggleProjects}
            className="explore-btn flex items-center gap-2 hover:opacity-75"
          >
            <FolderOutlined className="text-xl" />
            <span className="text-lg font-medium">Ver proyectos</span>
          </button>
          <Link
            to="/post"
            state={{ linea: linea.nombre }}
            className="explore-link flex items-center gap-2 hover:opacity-75"
          >
            <BookOutlined className="text-xl" />
            <span className="text-lg font-medium">Ver publicaciones</span>
          </Link>

        </div>
      </div>


      {showProjects && linea.proyectos?.length > 0 && (
        <div ref={projectListRef} className="project-list mt-6 p-4 border rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Proyectos</h3>
          <ul className="divide-y divide-gray-300">
            {linea.proyectos.map((proyecto) => (
              <li key={proyecto.id} className="project-item py-3">
                <Link to={`/proyecto/${proyecto.id}`} className="block">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{proyecto.nombre}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {proyecto.descripcion.length > 100
                      ? proyecto.descripcion.slice(0, 100) + '...'
                      : proyecto.descripcion}
                  </p>

                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LineaExtensionDetail;
