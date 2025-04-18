import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../config/apiConfig";
import Loader from "../../Loader/Loader";
import "./HomeExploration.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Configuración de Strapi
const STRAPI_API_ENDPOINT = `${API_BASE_URL}/api/novedads`; // Endpoint para la colección 'novedads'

export default function HomeExploration() {
  const [novedades, setNovedades] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para indicar carga inicial
  const [error, setError] = useState(null); // Estado para almacenar errores de fetch

  // --- Efecto para Cargar Datos ---
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Inicia la carga
      setError(null); // Resetea errores previos
      try {
        const response = await fetch(STRAPI_API_ENDPOINT);

        // Verificar si la respuesta HTTP fue exitosa (status 200-299)
        if (!response.ok) {
          // Intentar obtener más detalles del error si es posible
          let errorData;
          try {
            errorData = await response.json();
            // eslint-disable-next-line no-unused-vars
          } catch (parseError) {
            // Si el cuerpo no es JSON o está vacío
            errorData = { message: response.statusText };
          }
          throw new Error(
            `HTTP error! status: ${response.status} - ${errorData?.error?.message || errorData?.message || "Error desconocido"}`
          );
        }

        // Procesar la respuesta JSON
        const result = await response.json();
        console.log("Datos recibidos de Strapi:", result);

        // Verificar la estructura esperada de Strapi v4 ({ data: [...] })
        if (result && Array.isArray(result.data)) {
          setNovedades(result.data); // Guardar el array de entidades
        } else {
          console.warn(
            "La estructura de datos recibida no es la esperada (se esperaba result.data como array):",
            result
          );
          setNovedades([]); // Establecer como vacío si la estructura no es correcta
        }
      } catch (err) {
        console.error("Error detallado al obtener datos:", err);
        setError(err.message || "Ocurrió un error al cargar las novedades."); // Guardar el mensaje de error
        setNovedades([]); // Asegurar que no haya datos viejos si falla
      } finally {
        setLoading(false); // Finaliza la carga (tanto si tuvo éxito como si falló)
      }
    };

    fetchData();
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

  if (loading) {
    return <Loader />; // Muestra el loader mientras carga
  }

  if (error) {
    return (
      // Muestra un mensaje de error claro
      <div className="relative isolate px-6 py-14 sm:py-32 lg:px-8 text-center text-red-600">
        <h2>Error al cargar novedades</h2>
        <p>{error}</p>
        <p>Por favor, intenta recargar la página o contacta al soporte.</p>
      </div>
    );
  }

  if (!novedades || novedades.length === 0) {
    return (
      // Mensaje si no hay novedades (después de cargar y sin errores)
      <div className="relative isolate px-6 py-14 sm:py-32 lg:px-8 text-center">
        <h2 className="custom-color text-xl font-semibold">No hay novedades</h2>
        <p className="mt-2 text-gray-600">Vuelve a consultar más tarde.</p>
      </div>
    );
  }

  return (
    <div className=" w-full sm:max-w-full mb-[20%]">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h2 className="custom-color text-base/7 font-semibold custom-animation-start-text ">
          Nuestras
        </h2>
        <p className="custom-color mt-2 text-4xl font-semibold tracking-tight text-balance sm:text-5xl custom-animation-start-text">
          Novedades
        </p>
      </div>
      <div className="relative flex items-center justify-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={
            novedades.length > 0 ? Math.floor(novedades.length / 2) : 0
          }
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false, // Ajusta si quieres sombras
          }}
          pagination={{ clickable: true }} // Asegúrate que los estilos de paginación estén visibles
          navigation={false} // Asegúrate que los estilos/botones de navegación estén visibles y funcionen
          modules={[
            EffectCoverflow,
            Pagination,
            Navigation,
            Mousewheel,
            Keyboard,
          ]}
          className="mySwiper w-full" // Asegúrate que el Swiper pueda ocupar el ancho necesario
          style={{ paddingBottom: "40px" }} // Añade espacio para la paginación si queda oculta
        >
          {novedades.map((novedad) => (
            <SwiperSlide
              key={novedad.id}
              data-history={novedad.titulo || `novedad-${novedad.id}`}
              className="poster-slide !w-[300px] sm:!w-[400px] home-swiper-slide " // Ajusta el ancho si es necesario con !important si Swiper lo sobreescribe
            >
              <div className="custom-novedad flex flex-col h-[100%] p-4 rounded-lg text-center overflow-hidden">
                {/* TÍTULO */}
                <div className="h-[80px] flex items-center justify-center px-2 mt-[]">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {novedad?.Titulo || "Título no disponible"}
                  </h3>
                </div>

                {/* DESCRIPCIÓN */}
                <div className="flex items-center h-[150px] overflow-y-auto">
                  <p className="text-sm text-gray-600 px-3">
                    {novedad?.Descripcion || "Descripción no disponible."}
                  </p>
                </div>

                {/* BOTÓN */}
                <div className="h-[80px] flex items-end justify-center">
                  <a
                    className="btn-novedades"
                    href={novedad?.Enlace || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Más
                    <div className="hf-novedades">
                      <div />
                    </div>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

/*

!! Estilado de las cards 
    effect={"coverflow"}: Define que el efecto del carrusel será Coverflow, que da un efecto 3D donde las diapositivas se inclinan y apilan.
    coverflowEffect={{ rotate: 30, stretch: 0, depth: 300, modifier: 1, slideShadows: false }}
        rotate: 30 → Rota cada diapositiva en 30 grados en el eje Y.
        stretch: 0 → No estira las diapositivas horizontalmente.
        depth: 300 → La profundidad en píxeles entre diapositivas (mayor profundidad = más efecto 3D).
        modifier: 1 → Controla la intensidad del efecto (valores mayores hacen cambios más drásticos).
        slideShadows: false → Desactiva las sombras de las diapositivas.

!! Interacción y navegación

    grabCursor={true}:Muestra un cursor tipo "agarre" (grab) cuando pasas el mouse sobre el Swiper.
    centeredSlides={true}: Centra la diapositiva activa en la pantalla en lugar de alinearlas a la izquierda.
    initialSlide={Math.floor(novedades.length / 2)}: Comienza mostrando la diapositiva que está en la mitad de la lista novedades.
    slidesPerView={"auto"}: Muestra tantas diapositivas como sea posible dependiendo del tamaño del contenedor.

!! Paginación y navegación

    pagination={{ clickable: true }}: Habilita la paginación con puntos (dots), permitiendo hacer clic en ellos para cambiar de diapositiva
    navigation={true}: Activa los botones de navegación (flechas izquierda y derecha).
    */
