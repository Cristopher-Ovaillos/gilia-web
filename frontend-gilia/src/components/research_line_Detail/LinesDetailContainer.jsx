import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { BookOutlined, FolderOutlined, TeamOutlined } from "@ant-design/icons";
import Loader from "../Loader/Loader";
import { API_BASE_URL } from "../../config/apiConfig";
import { marked } from "marked";
import "./LinesDetailContainer.css";

const ListLineasContainer = () => {
  const [linea, setLinea] = useState(null);
  const [showProjects, setShowProjects] = useState(false);
  const [showIntegrants, setShowIntegrants] = useState(false);
  const projectListRef = useRef(null);
  const integrantsListRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/linea-investigacions/${id}`
        );
        const data = await response.json();
        setLinea(data.data);
        console.log("investigacion personas: ", data.data.people[0]?.full_name);
      } catch (error) {
        console.error("Error al obtener la línea de investigación:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (showProjects && projectListRef.current) {
      setTimeout(() => {
        projectListRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [showProjects]);

  useEffect(() => {
    if (showIntegrants && integrantsListRef.current) {
      setTimeout(() => {
        integrantsListRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [showIntegrants]);

  if (!linea) return <Loader />;

  const descripcionHTML = marked(linea.descripcion || "");

  const handleToggleProjects = () => {
    const newState = !showProjects;
    setShowProjects(newState);
    if (newState) setShowIntegrants(false);
  };

  const handleToggleIntegrants = () => {
    const newState = !showIntegrants;
    setShowIntegrants(newState);
    if (newState) setShowProjects(false);
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen w-[90%] mx-auto">
      <h1 className="text-center w-full titulo-linea-investigacion">
        {linea.nombre}
      </h1>

      <div className="text-lg leading-relaxed font-light text-justify w-full text-linea-investigacion">
        <div
          className="sm:prose-xl"
          dangerouslySetInnerHTML={{ __html: descripcionHTML }}
        />
      </div>

      <div className="mt-8 w-full text-center border-t border-gray-300 pt-4">
        <p className="text-lg font-semibold mb-2">
          Explora más sobre esta línea:
        </p>
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
          <button
            onClick={handleToggleIntegrants}
            className="explore-btn flex items-center gap-2 hover:opacity-75"
          >
            <TeamOutlined className="text-xl" />
            <span className="text-lg font-medium">Ver integrantes</span>
          </button>
        </div>
      </div>

      {showProjects && linea.proyectos?.length > 0 && (
        <div
          ref={projectListRef}
          className="project-list mt-6 p-4 border rounded shadow-lg w-full"
        >
          <h3 className="text-xl font-semibold mb-4">Proyectos</h3>
          <ul className="divide-y divide-gray-300">
            {linea.proyectos.map((proyecto) => (
              <li key={proyecto.id} className="project-item py-3">
                <Link to={`/proyecto/${proyecto.id}`} className="block">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold"> {proyecto.descripcion.length > 100
                      ? proyecto.descripcion.slice(0, 100) + '...'
                      : proyecto.descripcion}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {proyecto.descripcion}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showIntegrants && linea.people?.length > 0 && (
        <div
          ref={integrantsListRef}
          className="integrants-list mt-6 p-4 border rounded shadow-lg w-full"
        >
          <h3 className="text-xl font-semibold mb-4">Integrantes</h3>
          <ul className="divide-y divide-gray-300">
            {linea.people.map((integrante) => (
              <li key={integrante.id} className="integrant-item py-3">
                <span className="font-semibold">{integrante.full_name}</span>
                {integrante.role_person && (
                  <p className="text-sm text-gray-600 mt-1 capitalize">
                    {integrante.role_person}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListLineasContainer;
