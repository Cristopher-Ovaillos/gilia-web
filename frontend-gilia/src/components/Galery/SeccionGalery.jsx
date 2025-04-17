import React from "react";
import { API_BASE_URL } from "../../config/apiConfig";

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

const SeccionGalery = ({ section }) => {
  return (
    <div key={section.id} className="mb-12">
      <h2 className="text-2xl font-bold text-center mb-4">{section.titulo}</h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 1000,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation
        mousewheel
        keyboard
        modules={[
          EffectCoverflow,
          Pagination,
          Navigation,
          Mousewheel,
          Keyboard,
        ]}
        className="pb-12 pt-4 h-[300px] md:h-[400px] lg:h-[500px]"
      >
        {section.imagenes.map((img, idx) => (
          <SwiperSlide
            key={idx}
            style={{ backgroundColor: 'var(--backgroundColor)' , border: 'none', boxShadow: 'none' }}
            className="flex-shrink-0 bg-transparent" // ← podés agregar estilos acá si querés
          >
            <div className="relative h-full flex items-center justify-center">
              <img
                src={`${API_BASE_URL}${img.url}`}
                alt={img.descripcion || `Imagen ${idx + 1}`}
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SeccionGalery;
