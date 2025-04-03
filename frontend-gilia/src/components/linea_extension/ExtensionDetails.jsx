import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import { API_BASE_URL } from "../../config/apiConfig";
import './Extension.css';
import Loader from "../Loader/Loader";

const LineaExtensionDetail = () => {
  const { id } = useParams();
  const [linea, setLinea] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(2);
  const [visiblePublications, setVisiblePublications] = useState(2);

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

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-4 border-b pb-2">{linea.nombre}</h2>
      <div className="text-lg mb-6" dangerouslySetInnerHTML={{ __html: descripcionHTML }} />
      {linea.instituciones && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Escuelas e Instituciones</h3>
          <p className="text-base">{linea.instituciones}</p>
        </div>
      )}
      {linea.proyectos?.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Proyectos Relacionados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {linea.proyectos.slice(0, visibleProjects).map((proyecto) => (
              <div key={proyecto.id} className="card">
                <h4 className="text-lg font-semibold mb-2">{proyecto.nombre}</h4>
                <p className="text-sm">{proyecto.descripcion}</p>
              </div>
            ))}
          </div>
          {linea.proyectos.length > visibleProjects && (
            <button onClick={() => setVisibleProjects(visibleProjects + 6)} className="card-button mt-4">
              Ver más proyectos
            </button>
          )}
        </div>
      )}
      {linea.publicacions?.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Publicaciones Relacionadas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {linea.publicacions.slice(0, visiblePublications).map((pub) => (
              <div key={pub.id} className="card">
                <h4 className="text-lg font-semibold mb-2">{pub.titulo}</h4>
                <p className="text-sm">{pub.resumen || "Sin resumen"}</p>
              </div>
            ))}
          </div>
          {linea.publicacions.length > visiblePublications && (
            <button onClick={() => setVisiblePublications(visiblePublications + 6)} className="card-button mt-4">
              Ver más publicaciones
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LineaExtensionDetail;
