import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../../config/apiConfig";
import Card from "../CardExploration/Card";
import "./homeExploration.css";

const truncateDescription = (description, wordLimit) => {
  if (!description) return "";
  const words = description.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + " . . . " : description;
};


export default function HomeExploration() {
  const [lineas, setLineas] = useState([]);

  useEffect(() => {
    const fetchLineas = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/research-lines`);
        const result = await response.json();
        console.log("Líneas recibidas:", result);

        if (result.data && Array.isArray(result.data)) {
          // Tomamos las primeras 3 líneas y marcamos la segunda como featured
          const updatedLineas = result.data.slice(0, 3).map((linea, index) => ({
            ...linea,
            featured: index === 1, // Solo la segunda línea será featured
          }));

          setLineas(updatedLineas);
        } else {
          console.error("La respuesta no tiene el formato esperado", result);
        }
      } catch (error) {
        console.error("Error al obtener las líneas:", error);
      }
    };

    fetchLineas();
  }, []);

  return (
    <div className="relative outline-none border-0 isolate px-6 py-14 sm:py-32 lg:px-8 mt-[-10%]">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="custom-color text-base/7 font-semibold custom-animation-start-text">
          Novedades
        </h2>
        <p className="custom-color mt-2 text-4xl font-semibold tracking-tight text-balance sm:text-5xl custom-animation-start-text">
          Nuevas Líneas de Investigación
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 sm:grid-cols-3 lg:max-w-4xl lg:grid-cols-3 gap-y-6 sm:gap-y-0 h-120">
        {lineas.length > 0 ? (
          lineas.map((lineaInv) => <Card
            key={lineaInv.id}
            {...lineaInv}
            description={truncateDescription(lineaInv.description, 15)}
          />)
        ) : (
          <p className="text-center col-span-3">Cargando líneas de investigación...</p>
        )}
      </div>
    </div>
  );
}
