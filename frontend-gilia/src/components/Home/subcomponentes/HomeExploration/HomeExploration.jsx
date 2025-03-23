import { useState } from "react";
import Card from "../CardExploration/Card";
import "./homeExploration.css";

export default function HomeExploration() {
  const [activeIndex, setActiveIndex] = useState(1);

  const novedades = [
    { id: 1, titulo: "IA en la Medicina", descripcion: "Explorando el impacto de la inteligencia artificial en los diagnósticos médicos y tratamientos avanzados.", link: "#" },
    { id: 2, titulo: "Blockchain en Finanzas", descripcion: "Cómo la tecnología blockchain está revolucionando la seguridad y transparencia en las transacciones financieras.", link: "#" },
    { id: 3, titulo: "Realidad Virtual en Educación", descripcion: "El uso de la realidad virtual para mejorar la enseñanza y el aprendizaje en las aulas.", link: "#" },
    { id: 4, titulo: "Automatización Industrial", descripcion: "Robots y software inteligente en la industria manufacturera para optimizar la producción.", link: "#" },
    { id: 5, titulo: "5G y su Impacto", descripcion: "Cómo la conectividad 5G transformará la comunicación y las ciudades inteligentes.", link: "#" },
  ];

  const totalItems = novedades.length;

  const getDisplayedItems = () => {
    return [
      novedades[(activeIndex - 1 + totalItems) % totalItems],
      novedades[activeIndex],
      novedades[(activeIndex + 1) % totalItems],
    ];
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

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
        <button onClick={handlePrev} className="absolute left-0 text-white px-4 py-2 rounded-full rotate-180 ml-[20%] custom-flecha">➤</button>
        <div className="flex overflow-hidden w-[950px] h-[450px] justify-center pl-5 pr-5 pt-5">
          {getDisplayedItems().map((lineaInv, index) => (
            <Card
              key={lineaInv.id}
              {...lineaInv}
              activa={index === 1}
            />
          ))}
        </div>
        <button onClick={handleNext} className="absolute right-0 text-white px-4 py-2 rounded-full mr-[20%] custom-flecha">➤</button>
      </div>
    </div>
  );
}
