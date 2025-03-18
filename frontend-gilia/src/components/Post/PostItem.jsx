import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const PostItem = ({ publicacion }) => {
  const { theme } = useTheme();

  return (
    <li
      className="p-4 border-b border-gray-300 transition-all duration-300"
      style={{
        backgroundColor: theme.token.backgroundColorPrimary,
        color: theme.token.colorTextBase,
      }}
    >
      <Link
        to={`/publicacion/${publicacion.id}`}
        className="block p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
        style={{
          backgroundColor: theme.token.backgroundColorPrimary,
          color: theme.token.colorTextBase,
        }}
      >
        <h3 className="text-lg font-semibold">{publicacion.titulo || "Título no disponible"}</h3>
        <p className="text-sm opacity-80">{publicacion.autores || "Autores no disponibles"} - {publicacion.anio || "Año no disponible"}</p>
        <p className={`text-sm mt-1 font-medium ${publicacion.tipo === "articulo" ? "text-blue-500" : "text-green-500"}`}>
          {publicacion.tipo || "Tipo no disponible"}
        </p>
      </Link>
    </li>
  );
};

export default PostItem;