
import { useTheme } from "../../context/ThemeContext";

const Pagination = ({ currentPage, totalPages, setPage, loading }) => {
  const { theme } = useTheme();
  const getPageNumbers = () => {
    const pageNumbers = [];
    //esta funcion es para mostrar solamente 2 paginas menos o mas de la actual para no mostrar todas las paginas que existen y usamos un arreglo para guardar eso
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };


  /* 
  Funcion para los botones para avanzar o retroceder de pagina
  */
  const handleNextPage = () => {
    if (currentPage < totalPages && !loading) {
      setPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1 && !loading) {
      setPage(currentPage - 1);
    }
  };



  return (
    <div className="flex justify-center gap-4 my-6">
      <ol className="flex justify-center gap-2 text-sm font-medium">
        {/* Boton */}
        <li>
          <button
            onClick={handlePrevPage}
            className={`flex items-center justify-center p-3 rounded-full transition-all duration-300 ease-in-out 
              ${currentPage === 1 || loading ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:scale-105 active:scale-95"} 
              ${theme.token.isDarkMode ? "bg-gray-800 text-white shadow-lg" : "bg-white text-black shadow-md"}
              border border-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 dark:border-gray-600`}
            disabled={currentPage === 1 || loading}
          >
            <span className="sr-only">Prev Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>

        {/* numero de paginas */}
        {getPageNumbers().map((page) => (
          <li key={page}>
            <button
              onClick={() => setPage(page)}
              className={`block w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 
                ${page === currentPage 
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white shadow-md"} 
                hover:scale-110 active:scale-95`}
            >
              {page}
            </button>
          </li>
        ))}

        {/* boton */}
        <li>
          <button
            onClick={handleNextPage}
            className={`flex items-center justify-center p-3 rounded-full transition-all duration-300 ease-in-out 
              ${currentPage === totalPages || loading ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:scale-105 active:scale-95"} 
              ${theme.token.isDarkMode ? "bg-gray-800 text-white shadow-lg" : "bg-white text-black shadow-md"}
              border border-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 dark:border-gray-600`}
            disabled={currentPage === totalPages || loading}
          >
            <span className="sr-only">Next Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ol>
    </div>
  );
};

export default Pagination;
