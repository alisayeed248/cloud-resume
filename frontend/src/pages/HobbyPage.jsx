import React from "react";
import { useParams, Link } from "react-router-dom";

function HobbyPage() {
  const { hobbyName } = useParams();

  const posts = [
    {
      id: "post1",
      title: "First Post",
      description: "This is a sample post...",
    },
    {
      id: "post2",
      title: "Second Post",
      description: "Another sample post...",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">{hobbyName} Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link to={`/hobbies/${hobbyName}/${post.id}`} key={post.id}>
            <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
              <h2 className="text-xl font-bold text-white">{post.title}</h2>
              <p className="text-gray-300 truncate">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HobbyPage;