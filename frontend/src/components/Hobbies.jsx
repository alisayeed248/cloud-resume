import React, { useState, useEffect } from "react";
import api from "../services/api";

const Hobbies = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("Fetching posts...");
        const data = await api.blog.getAllPosts();
        console.log("API response:", data);
        setPosts(data.posts || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load blog posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const categories = [
    {
      id: "tech",
      title: "Technology",
      icon: "💻",
      description: "Programming, cloud architecture, and new tech explorations",
    },
    {
      id: "travel",
      title: "Travel",
      icon: "✈️",
      description: "Places I've visited and travel experiences",
    },
    {
      id: "books",
      title: "Books",
      icon: "📚",
      description: "Book reviews and reading lists",
    },
    {
      id: "projects",
      title: "Side Projects",
      icon: "🔨",
      description: "Deep dives into my technical projects",
    },
  ];

  return (
    <section id="hobbies">
      <div className="w-full p-6 md:p-8 lg:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-left">
          HOBBIES
        </h2>
        <p className="text-lg text-white mb-8">
          Outside of work, I enjoy exploring various interests and sharing my
          thoughts through my blog. Check out some of my posts in these
          categories:
        </p>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 mb-8">
          {categories.map((category) => (
            <a
              href={`/blog/category/${category.id}`}
              className="md:w-[calc(50%-12px)] w-full bg-gray-800 rounded-xl p-6 sm:p-8 overflow-hidden hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
              key={category.id}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  {category.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="w-full bg-gray-800 rounded-xl p-6 sm:p-8 mt-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4 pb-2 border-b border-gray-700">
            Recent Blog Posts
          </h3>

          {loading ? (
            <p className="text-gray-300 italic">Loading recent posts...</p>
          ) : error ? (
            <p className="text-red-400">{error}</p>
          ) : posts.length === 0 ? (
            <p className="text-gray-300">No posts found.</p>
          ) : (
            <ul className="space-y-4">
              {posts.slice(0, 5).map((post) => (
                <li key={post.id} className="border-b border-gray-700 pb-3">
                  <a
                    href={`/blog/post/${post.id}`}
                    className="block hover:text-blue-400 transition-colors"
                  >
                    <h4 className="text-lg font-medium text-white">
                      {post.title}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">
                      {post.category} •{" "}
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
