import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

function HobbyPage() {
  const { hobbyName } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const categoryMap = {
    tech: {
      title: "Technology",
      description: "Programming, cloud architecture, and new tech explorations",
      icon: "💻",
    },
    travel: {
      title: "Travel",
      description: "Places I've visited and travel experiences",
      icon: "✈️",
    },
    books: {
      title: "Books",
      description: "Book reviews and reading lists",
      icon: "📚",
    },
    projects: {
      title: "Side Projects",
      description: "Deep dives into my technical projects",
      icon: "🔨",
    },
  };

  const currentCategory = categoryMap[hobbyName] || {
    title: hobbyName,
    description: "Posts in this category",
    icon: "📄",
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await api.blog.getAllPosts();
        // Filter posts by category (case insensitive)
        const filteredPosts = data.posts?.filter(post => 
          post.category?.toLowerCase() === hobbyName?.toLowerCase()
        ) || [];
        
        setPosts(filteredPosts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, [hobbyName]);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Back button */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Resume
        </Link>
      </div>

      {/* Category header */}
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl font-bold mb-4">{currentCategory.title}</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {currentCategory.description}
        </p>
      </div>

      {/* Category navigation */}
      <div className="bg-gray-900 py-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-4 pb-2 justify-center">
            {Object.entries(categoryMap).map(([id, category]) => (
              <Link 
                key={id}
                to={`/hobbies/${id}`}
                className={`whitespace-nowrap px-4 py-2 rounded-full ${
                  id === hobbyName 
                    ? "bg-blue-500 text-white" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Articles heading */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-4xl font-bold text-center">Latest Articles</h2>
      </div>

      {/* Posts grid */}
      <div className="container mx-auto px-4 pb-16">
        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-400">Loading posts...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-400">{error}</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-400">No posts found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                to={`/hobbies/${hobbyName}/${post.id}`} 
                key={post.id}
                className="block"
              >
                <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300">
                  {/* Post Image */}
                  <div 
                    className="h-56 bg-gray-800 bg-cover bg-center"
                    style={{ backgroundImage: post.imageUrl ? `url(${post.imageUrl})` : 'none' }}
                  >
                    {!post.imageUrl && (
                      <div className="w-full h-full flex items-center justify-center bg-gray-800">
                        <span className="text-4xl">{currentCategory.icon}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Post Details */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                    {post.date && (
                      <p className="text-gray-400 text-sm mb-3">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    )}
                    {post.excerpt && (
                      <p className="text-gray-300 line-clamp-3">{post.excerpt}</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HobbyPage;