"use client"; // Ensures this component is treated as a client-side component

import { useState, useEffect } from "react";

interface Comment {
  name: string;
  text: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");

  // Load comments from localStorage on component mount
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to localStorage whenever comments change
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);

  // Handle form submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !commentText) {
      alert("Please provide a name and a comment.");
      return;
    }

    const newComment: Comment = { name, text: commentText };
    setComments([newComment, ...comments]);
    setName("");
    setCommentText("");
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-2xl mx-auto my-8 border-2 border-yellow-400">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Comments</h2>

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit} className="mb-6 space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="font-medium text-gray-700">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="commentText" className="font-medium text-gray-700">
            Your Comment:
          </label>
          <textarea
            id="commentText"
            name="commentText"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your comment"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Comment
        </button>
      </form>

      {/* Display Comments */}
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm border border-green-400"
            >
              <p className="font-semibold text-gray-800">{comment.name}</p>
              <p className="text-gray-600">{comment.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
