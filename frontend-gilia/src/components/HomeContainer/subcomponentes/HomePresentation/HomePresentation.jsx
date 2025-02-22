import "./HomePresentation.css";

 const HomePresentation = () => {
  return (
    <div
    className=" isolate bg-cover bg-fixed bg-center bg-opacity-50"
    style={{ backgroundImage: 'url("")' }}
  >
    <div className="mx-auto max-w-2xl sm:py-24 lg:py-34">
      <div className="text-center">
        <h1 className="custom-color text-7xl font-semibold tracking-tight text-balance sm:text-6xl">
          {" "}
          Investigación en Lenguajes e Inteligencia Artificial{" "}
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md custom-color custom-back px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Lineas de Investigación
          </a>
          <a href="#"
            className=" custom-color text-sm/6 font-semibold text-gray-900"
          >
            Sobre Nosotros <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomePresentation;
