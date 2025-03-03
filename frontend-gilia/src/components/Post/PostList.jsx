import { useState, useEffect } from 'react';
import PostCard from './PostCard';
import Pagination from './Pagination';
import Loader from '../Loader/Loader';
import { useTheme } from '../../context/ThemeContext'; // Usar el contexto de tema
import { API_BASE_URL } from "../../config/apiConfig";
const PostList = () => {
  const { theme } = useTheme();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // funcion para obtener las publicaciones de la API
  
  const fetchPosts = async () => {
    setLoading(true);
    try {
      // //definiendo la cantidad de post de cada pagina, los atributos cambian (pageCount, etc)
      const response = await fetch(
        `${API_BASE_URL}/api/posts?pagination[page]=${currentPage}&pagination[pageSize]=6&populate=*`
      );
      const data = await response.json();

      console.log("API Response:", data); 

      if (!data || !data.data) {
        throw new Error("La respuesta de la API no contiene datos válidos.");
      }

      setPosts(data.data);

      // Verifica que 'meta' y 'pagination' existan antes de acceder a 'pageCount'
      setTotalPages(data.meta?.pagination?.pageCount || 1);

    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };



  /*
  1.Este hook se ejecuta cuando el componente se monta por primera vez o cuando cambia el valor de currentPage. Osea 
  cada vez que cambias de pagina, se vuelve a ejecutar fetchPosts para obtener las publicaciones de la nueva página.
  
  2.Ademas el useEffect se ejecuta solo cuando currentPage cambia.
  */
  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  return (
    <div className="container mx-auto p-4" style={{ backgroundColor: theme.token.backgroundColor }}>
      <h1 className="text-3xl font-bold my-4" style={{ color: theme.token.colorTextBase }}>Publicaciones</h1>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <PostCard key={post.id} post={post} api={API_BASE_URL} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setPage={setCurrentPage}
            loading={loading}
          />
        </div>
      )}
    </div>
  );
};

export default PostList;
