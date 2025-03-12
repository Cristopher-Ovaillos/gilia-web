import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const PostCard = ({ publicacion }) => {
    const { theme } = useTheme();

    // Resumen truncado si es necesario
    const resumen = publicacion.resumen
        ? publicacion.resumen.length > 120
            ? publicacion.resumen.slice(0, 120) + "..."  // Truncamos si es mayor a 120 caracteres
            : publicacion.resumen
        : "Resumen no disponible";

    return (
        <Link
            to={`/publicacion/${publicacion.id}`}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:bg-gray-100 transition-all"
            style={{
                backgroundColor: theme.token.backgroundColorPrimary,
                color: theme.token.colorTextBase,
            }}
        >
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{publicacion.titulo || "Título no disponible"}</h3>
                <p className="text-sm text-gray-600 mb-4">{resumen}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{publicacion.autores || "Autores no disponibles"}</span>
                    <span>{publicacion.anio || "Año no disponible"}</span>
                </div>
            </div>
        </Link>
    );
};

export default PostCard;
