
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext'; 

const PostCard = ({ post, api }) => {
    const { theme } = useTheme();  


    console.log("post card : ",api);
    

    const imageUrl = `${api}${post.image[0].url}`;

    return (
        <Link
            to={`/post/${post.id}`}
            className="flex flex-col rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            style={{
                backgroundColor: theme.token.backgroundColorSecondary,
                color: theme.token.colorTextBase,
            }}
        >
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                />
            ) : (
                <div className="w-full h-48 bg-gray-300 rounded-t-xl flex items-center justify-center text-white">
                    No Image Available
                </div>
            )}

            <div className="p-4 flex flex-col justify-between flex-grow">
                <h3
                    className="text-xl font-semibold mb-3"
                    style={{
                        color: theme.token.colorTextBase,
                    }}
                >
                    {post.tittle}
                </h3>

                <p className="text-sm text-gray-600 mb-4">{post.description}</p>

                
            </div>
        </Link>
    );
};

export default PostCard;
