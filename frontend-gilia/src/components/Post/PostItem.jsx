import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const tipoColorMap = {
  "Artículo": "#3B82F6", // azul
  "Capítulo de Libro": "#8B5CF6", // púrpura
  "Paper": "#10B981", // verde
  "Informe Técnico": "#F59E0B", // amarillo
  "Tesis": "#EF4444", // rojo
  "Libro": "#6366F1", // índigo
};

const PostItem = ({ publicacion }) => {
  const { theme } = useTheme();
  const sidebarColor =
    tipoColorMap[publicacion.tipo] || theme.token.backgroundColorSecondary || "#ccc";

  return (
    <li className="border-b border-gray-300">
      <div
        className="p-4 flex flex-col gap-4 sm:flex-row items-start sm:items-center sm:space-x-4"
        style={{
          borderLeft: `4px solid ${sidebarColor}`,
          backgroundColor: theme.token.backgroundColorPrimary,
          color: theme.token.colorTextBase,
        }}
      >
        <Link
          to={`/publicacion/${publicacion.id}`}
          className="w-full sm:w-auto"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h3 className="text-lg font-semibold sm:text-xl">{publicacion.titulo || "Título no disponible"}</h3>
          <p className="text-sm opacity-80">{publicacion.autores || "Autores no disponibles"} - {publicacion.anio || "Año no disponible"}</p>
          <p className="text-sm mt-1 font-medium">
            <span
              className="px-2 py-1 rounded"
              style={{ backgroundColor: sidebarColor, color: "#fff" }}
            >
              {publicacion.tipo || "Tipo no disponible"}
            </span>
          </p>

          {/* Información adicional */}
          {(publicacion.enlace ||
            publicacion.editor ||
            publicacion.pagina_libro ||
            publicacion.resumen ||
            publicacion.linea_investigacions ||
            publicacion.linea_extensions) && (
            <div className="mt-2 text-sm">
              {publicacion.enlace && <p><strong>Enlace:</strong> {publicacion.enlace}</p>}
              {publicacion.editor && <p><strong>Editor:</strong> {publicacion.editor}</p>}
              {publicacion.pagina_libro && <p><strong>Página del Libro:</strong> {publicacion.pagina_libro}</p>}
              {publicacion.resumen && <p><strong>Resumen:</strong> {publicacion.resumen}</p>}
              {publicacion.linea_investigacions && (
                <p>
                  <strong>Línea de Investigaciones:</strong> {publicacion.linea_investigacions}
                </p>
              )}
              {publicacion.linea_extensions && (
                <p>
                  <strong>Línea Extensions:</strong> {publicacion.linea_extensions}
                </p>
              )}
            </div>
          )}
        </Link>
      </div>
    </li>
  );
};

export default PostItem;
