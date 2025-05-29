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
        // DEBUG: Log what we actually got
        console.log("Raw API response:", data);
        console.log("Posts array:", data.posts);
        console.log("Current hobbyName:", hobbyName);
        // Check each post's category
        if (data.posts) {
          data.posts.forEach((post, index) => {
            console.log(`Post ${index}:`, {
              title: post.title,
              category: post.category,
              id: post.id
            });
          });
        }
        // Filter posts by category (case insensitive)
        const filteredPosts = data.posts?.filter(post =>
          post.category?.toLowerCase() === hobbyName?.toLowerCase()
        ) || [];
        console.log("Filtered posts:", filteredPosts);

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
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center text-sm md:text-base">
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Resume
        </Link>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">{currentCategory.title}</h1>
        <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
          {currentCategory.description}
        </p>
      </div>

      <div className="bg-gray-900 py-3 md:py-4 mb-6 md:mb-8 overflow-x-auto">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex space-x-2 md:space-x-4 pb-1 md:justify-center scrolling-touch no-scrollbar">
            {Object.entries(categoryMap).map(([id, category]) => (
              <Link
                key={id}
                to={`/hobbies/${id}`}
                className={`whitespace-nowrap px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base flex-shrink-0 ${id === hobbyName
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
              >
                <span className="mr-1 md:mr-2">{category.icon}</span>
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-6 md:mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Latest Articles</h2>
      </div>

      <div className="container mx-auto px-4 pb-10 md:pb-16">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {posts.map((post) => (
              <Link
                to={`/hobbies/${hobbyName}/${post.id}`}
                key={post.id}
                className="block"
              >
                <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300 h-full">
                  <div
                    className="h-40 sm:h-48 md:h-56 bg-gray-800 bg-cover bg-center"
                    style={{ backgroundImage: post.imageUrl ? `url(${post.imageUrl})` : 'none' }}
                  >
                    {!post.imageUrl && (
                      <div className="w-full h-full flex items-center justify-center bg-gray-800">
                        <span className="text-3xl md:text-4xl">{currentCategory.icon}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 md:p-5">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{post.title}</h3>
                    {post.date && (
                      <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    )}
                    {post.excerpt && (
                      <p className="text-sm md:text-base text-gray-300 line-clamp-2 md:line-clamp-3">{post.excerpt}</p>
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