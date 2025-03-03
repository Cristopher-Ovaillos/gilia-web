import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useTheme } from '../../context/ThemeContext';
import { API_BASE_URL } from "../../config/apiConfig";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch( `${API_BASE_URL}/api/posts/${id}?populate=*`);

        if (!response.ok) {
          throw new Error("Error fetching the post");
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500 mt-10">Cargando...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error: {error}</p>;
  if (!post || !post.id) return <p className="text-center text-gray-500 mt-10">No hay datos disponibles.</p>;

  return (
    <div
      className="max-w-screen-2xl mx-auto bg-white shadow-lg rounded-lg p-12 sm:p-24 mt-20"
      style={{
        backgroundColor: theme.token.cardBackgroundColor,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1), 0 1px 6px rgba(0, 0, 0, 0.08)"
      }}
    >
 
      <h1
        className="text-6xl font-extrabold text-gray-900 mb-8"
        style={{ color: theme.token.colorTextBase }}
      >
        {post.tittle}
      </h1>


      <div
        className="text-xl text-gray-700 leading-relaxed space-y-8"
        style={{ color: theme.token.colorTextBase }}
      >
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {post.content}
        </ReactMarkdown>
      </div>

 
      <div className="mt-10 text-gray-600 text-center text-sm">
        <p>Publicado en: {new Date(post.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default PostDetail;
