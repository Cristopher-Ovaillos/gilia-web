import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; 
import { useTheme } from '../../context/ThemeContext';
import "./Post.css";
const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/posts/${id}?populate=*`);
        if (!response.ok) {
          throw new Error("Error fetching the post");
        }
        const data = await response.json();
        console.log("API Response:", data);
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
  const containerStyle = "max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10";
  const titleStyle = "text-4xl font-bold text-gray-900"; 
  const contentStyle = "mt-6 text-gray-800 text-lg leading-relaxed";
  return (
<div className={containerStyle} style={{ backgroundColor: theme.token.cardBackgroundColor }} >
      <h1 className={titleStyle} style={{ color: theme.token.colorTextBase }}>{post.tittle}</h1>

   
      <div className={contentStyle} style={{ color: theme.token.colorTextBase }}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {post.content}
        </ReactMarkdown>
      </div>

     
    </div>
  );
};

export default PostDetail;
