
const Galery = () => {
    const images = [
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
    ];
  
    const cantidadDeColumnas=4;
    const cantidadDeFilasPorCol=3;
  
    return (
      // Contenedor principal con clases de Tailwind para la cuadrícula y márgenes.
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[90%] ml-[5%] mt-[2%] mb-[6%]">
        {/* Itera sobre un arreglo de 4 elementos para crear las columnas */}
        {[...Array(cantidadDeColumnas)].map((_, colIndex) => (
          // Cada columna tiene un contenedor con una cuadrícula interna
          <div key={colIndex} className="grid gap-4">
            {/* Itera sobre un arreglo de 3 elementos para crear las filas dentro de cada columna */}
            {[...Array(cantidadDeFilasPorCol)].map((_, rowIndex) => {
              // Calcula el índice de la imagen en el arreglo según la columna y la fila
              const imageIndex = colIndex * 3 + rowIndex;
              return (
                // Cada fila contiene una imagen
                <div key={rowIndex}>
                  <img
                    // Establece las clases para la imagen: altura automática, ancho máximo 100%, y bordes redondeados
                    className="h-auto max-w-full rounded-lg"
                    // Fuente de la imagen, obtenida del arreglo `images` usando el índice calculado
                    src={images[imageIndex]}
                    // Texto alternativo para la imagen, basado en el índice calculado
                    alt={`image-${imageIndex}`}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
  
    );
  };
  
  export default Galery;