import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Post.css';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    fetch('http://localhost:1337/api/posts?populate=*')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className={`p-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-all`} style={{ backgroundColor: theme.token.backgroundColor }}>
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/post/${post.id}`}
          className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
          style={{ backgroundColor: theme.token.cardBackgroundColor, color: theme.token.colorTextBase }}
        >
          {post.image && post.image.length > 0 && (
            <img
              src={`http://localhost:1337${post.image[0].url}`}
              alt={post.tittle}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
          )}
          <h3 className="text-xl font-bold mb-2">{post.tittle}</h3>
          <p>{post.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default PostsList;
