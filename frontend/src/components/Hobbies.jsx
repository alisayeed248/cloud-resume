import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const Hobbies = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10px 0px' }
    );

    const cards = document.querySelectorAll('#hobbies .card-float');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await api.blog.getAllPosts();
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
          thoughts through my blog. Check out some of my posts in these categories:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {categories.map((category) => (
            <div key={category.id} className="card-float">
              <Link
                to={`/hobbies/${category.id}`}
                className="block bg-black border border-gray-800 rounded-xl p-6 hover:bg-gray-900 transition-colors duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl text-blue-300">{category.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">{category.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>
                  </div>
                  <div className="text-blue-300 opacity-70">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="card-float bg-black border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4 pb-2 border-b border-gray-600">
            Recent Blog Posts
          </h3>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
                <p className="text-gray-300 italic">Loading recent posts...</p>
              </div>
            ) : error ? (
              <p className="text-red-400">{error}</p>
            ) : posts.length === 0 ? (
              <p className="text-gray-300">No posts found.</p>
            ) : (
              <ul className="space-y-4">
                {posts.slice(0, 5).map((post) => (
                  <li key={post.id} className="border-b border-gray-600 pb-3 last:border-b-0 last:pb-0">
                    <a
                      href={`/hobbies/${post.category}/${post.slug}`}
                      className="block hover:text-blue-400 transition-colors group"
                    >
                      <h4 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1">
                        {post.category} • {new Date(post.date).toLocaleDateString()}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;