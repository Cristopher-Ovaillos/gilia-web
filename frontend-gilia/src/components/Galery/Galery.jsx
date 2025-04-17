import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config/apiConfig";
import SeccionGalery from "./SeccionGalery";

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

/*

 <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Mousewheel, Keyboard]}
        effect={'coverflow'}
        slidesPerView={'auto'} // Muy importante para que respete el ancho de los slides
        spaceBetween={50}     // Ajusta el espacio entre imágenes
        centeredSlides={true}
        //loop={allImages.length > 1} // Activa el loop solo si hay más de una imagen
        grabCursor={true}
        coverflowEffect={{
          rotate: 40,        // Menos rotación puede verse mejor con imágenes
          stretch: 0,
          depth: 150,        // Más profundidad para separar más las imágenes
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        //mousewheel={true}
        keyboard={{
            enabled: true,
        }}
        // Clases para el contenedor Swiper, ajusta altura y padding
        className="pb-12 pt-4 h-[400px] md:h-[500px] lg:h-[600px]" // Aumentamos la altura para las imágenes
      >
        <h3></h3>
        {gallerySections.map((section) => {


        })}
      </Swiper>

<SwiperSlide key={`${imageInfo.sectionId}-${imageInfo.imageId}-${index}`} className="flex-shrink-0 w-[70vw] md:w-[50vw] lg:w-[40vw] max-w-md bg-black rounded-lg shadow-xl overflow-hidden group"
          >
            <div className="relative w-full h-full">

              <img
                src={`${API_BASE_URL}${imageInfo.imageUrl}`} // Construye la URL completa
                alt={imageInfo.altText || `Imagen ${index + 1} de ${imageInfo.sectionTitle}`}
                className="block w-full h-full object-cover" // `object-cover` para llenar el espacio sin distorsión
                loading="lazy" // Carga diferida para mejorar rendimiento
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity opacity-0 group-hover:opacity-100">
                <h3 className="text-white text-lg font-semibold truncate mb-1" title={imageInfo.sectionTitle}>
                  {imageInfo.sectionTitle}
                </h3>
              </div>
            </div>
          </SwiperSlide>

        
        */
