// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "./HomeExploration.css";

export default function HomeExploration() {
  const novedades = [
    {
      id: 1,
      titulo: "IA en la Medicina",
      descripcion:
        "Explorando el impacto de la inteligencia artificial en los diagnósticos médicos y tratamientos avanzados.",
      link: "#",
    },
    {
      id: 2,
      titulo: "Blockchain en Finanzas",
      descripcion:
        "Cómo la tecnología blockchain está revolucionando la seguridad y transparencia en las transacciones financieras.",
      link: "#",
    },
    {
      id: 3,
      titulo: "Realidad Virtual en Educación",
      descripcion:
        "El uso de la realidad virtual para mejorar la enseñanza y el aprendizaje en las aulas.",
      link: "#",
    },
    {
      id: 4,
      titulo: "Automatización Industrial",
      descripcion:
        "Robots y software inteligente en la industria manufacturera para optimizar la producción.",
      link: "#",
    },
    {
      id: 5,
      titulo: "5G y su Impacto",
      descripcion:
        "Cómo la conectividad 5G transformará la comunicación y las ciudades inteligentes.",
      link: "#",
    },
  ];

  return (
    <div className="relative outline-none border-0 isolate px-6 py-14 sm:py-32 lg:px-8 mt-[-10%]">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="custom-color text-base/7 font-semibold custom-animation-start-text">
          Nuestras
        </h2>
        <p className="custom-color mt-2 text-4xl font-semibold tracking-tight text-balance sm:text-5xl custom-animation-start-text">
          Novedades
        </p>
      </div>

      <div className="relative flex items-center justify-center mt-16">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={Math.floor(novedades.length / 2)} // Comienza desde el centro
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, EffectCoverflow, Pagination]}
          className="mySwiper mt-[2%]"
        >
          {novedades.map((novedad) => (
            <SwiperSlide
              key={novedad.id}
              data-history={novedad.titulo}
              className="poster-slide"
            >
              <div className="custom-novedad">
                <h3>{novedad.titulo}</h3>
                <p>{novedad.descripcion}</p>
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