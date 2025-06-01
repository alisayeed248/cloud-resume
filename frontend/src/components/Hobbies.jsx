import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
      color: "blue",
    },
    {
      id: "travel",
      title: "Travel",
      icon: "✈️",
      description: "Places I've visited and travel experiences",
      color: "green",
    },
    {
      id: "books",
      title: "Books",
      icon: "📚",
      description: "Book reviews and reading lists",
      color: "purple",
    },
    {
      id: "projects",
      title: "Side Projects",
      icon: "🔨",
      description: "Deep dives into my technical projects",
      color: "orange",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        title: "text-blue-400",
        icon: "text-blue-300",
        button: "text-blue-300",
      },
      green: {
        title: "text-green-400",
        icon: "text-green-300",
        button: "text-green-300",
      },
      purple: {
        title: "text-purple-400",
        icon: "text-purple-300",
        button: "text-purple-300",
      },
      orange: {
        title: "text-orange-400",
        icon: "text-orange-300",
        button: "text-orange-300",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="hobbies">
      <div className="w-full p-6 md:p-8 lg:p-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          HOBBIES
        </motion.h2>
        
        <motion.p
          className="text-lg text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          Outside of work, I enjoy exploring various interests and sharing my
          thoughts through my blog. Check out some of my posts in these
          categories:
        </motion.p>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {categories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Link
                  to={`/hobbies/${category.id}`}
                  className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`text-4xl ${colorClasses.icon}`}>
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold ${colorClasses.title} mb-2`}>
                        {category.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className={`${colorClasses.button} opacity-70`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Recent Blog Posts */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4 pb-2 border-b border-white/10">
            Recent Blog Posts
          </h3>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
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
                {posts.slice(0, 5).map((post, index) => (
                  <motion.li
                    key={post.id}
                    className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={`/blog/post/${post.slug}`}
                      className="block hover:text-blue-400 transition-colors group"
                    >
                      <h4 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1">
                        {post.category} •{" "}
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    </a>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;