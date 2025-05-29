import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

function PostPage() {
  const { hobbyName, slug } = useParams(); // Changed from postId to slug
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await api.blog.getPostBySlug(slug);
        setPost(data);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-black min-h-screen text-white p-6">
        <div className="container mx-auto">
          <p className="text-gray-400">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black min-h-screen text-white p-6">
        <div className="container mx-auto">
          <Link to={`/hobbies/${hobbyName}`} className="text-blue-400 hover:underline mb-4 inline-block">
            ← Back to {hobbyName} posts
          </Link>
          <p className="text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-black min-h-screen text-white p-6">
        <div className="container mx-auto">
          <Link to={`/hobbies/${hobbyName}`} className="text-blue-400 hover:underline mb-4 inline-block">
            ← Back to {hobbyName} posts
          </Link>
          <p className="text-gray-400">Post not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 py-6">
        <Link 
          to={`/hobbies/${hobbyName}`} 
          className="text-blue-400 hover:underline mb-6 inline-block"
        >
          ← Back to {hobbyName} posts
        </Link>
        
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
            <div className="text-gray-400 text-sm mb-4">
              <span>By {post.author}</span>
              {post.createdAt && (
                <span> • {new Date(post.createdAt).toLocaleDateString()}</span>
              )}
              <span> • {post.category}</span>
            </div>
            {post.excerpt && (
              <p className="text-xl text-gray-300 italic">{post.excerpt}</p>
            )}
          </header>

          {post.featured_image && (
            <div className="mb-8">
              <img 
                src={post.featured_image} 
                alt={post.title}
                className="w-full max-h-96 object-cover rounded-lg"
              />
            </div>
          )}

          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}

export default PostPage;