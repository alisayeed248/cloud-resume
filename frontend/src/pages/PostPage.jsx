import React from "react";
import { useParams, Link } from "react-router-dom";

function PostPage() {
  const { hobbyName, postId } = useParams();

  return (
    <div className="p-6">
      <Link
        to={`/hobbies/${hobbyName}`}
        className="text-blue-400 hover:underline mb-4 inline-block"
      >
        ← Back to {hobbyName} posts
      </Link>
      <h1 className="text-3xl font-bold text-white mb-4">Post: {postId}</h1>
      <div className="text-white">
        <p>This is the content of the blog post...</p>
      </div>
    </div>
  );
}

export default PostPage;
