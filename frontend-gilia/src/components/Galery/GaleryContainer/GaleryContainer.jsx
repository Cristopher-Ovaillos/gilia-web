import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../config/apiConfig";
import SeccionGalery from "../SeccionGalery/SeccionGalery";

const Galery = () => {
  const [gallerySections, setGallerySections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log(`${API_BASE_URL}/api/galerias`);

        const response = await fetch(`${API_BASE_URL}/api/galerias`);
        if (!response.ok) {
          throw new Error(
            `Error HTTP: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log("Datos de la galería obtenidos:", data);
        setGallerySections(data);
      } finally {
        setLoading(false); // Finaliza la carga en cualquier caso
      }
    };

    fetchData();
  }, []); // El array vacío asegura que se ejecute solo al montar

  if (loading) {
    return <div className="text-center py-10">Cargando galería...</div>;
  }

  // --- Renderizado del Swiper ---
  return (
    <div className="w-full my-8 overflow-hidden">
      {gallerySections.map((section) => (
        <SeccionGalery key={section.id} section={section} />
      ))}
    </div>
  );
};

export default Galery;
