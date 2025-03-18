import React from "react";

const PostPagination = ({ pagina, setPagina, totalPaginas }) => {
  return (
    <div className="mt-6 flex justify-between sm:justify-center items-center gap-4">
      <button
        disabled={pagina === 1}
        onClick={() => setPagina(pagina - 1)}
        className="p-2 border rounded disabled:opacity-50"
      >
        Anterior
      </button>
      <span>
        Página {pagina} de {totalPaginas}
      </span>
      <button
        disabled={pagina === totalPaginas}
        onClick={() => setPagina(pagina + 1)}
        className="p-2 border rounded disabled:opacity-50"
      >
        Siguiente
      </button>
    </div>
  );
};

export default PostPagination;
