import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [optimisticComment, setOptimisticComment] = useState(null);

  // Simulating an API request to add a comment
  const addCommentToServer = async (comment) => {
    // Simulate network delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.2) {
          // 80% chance to succeed
          resolve(comment);
        } else {
          reject("Error: Could not add comment");
        }
      }, 1000);
    });
  };

  const handleAddComment = async () => {
    // Optimistically add the comment
    const optimisticNewComment = { id: Date.now(), text: newComment };
    setComments((prevComments) => [...prevComments, optimisticNewComment]);
    setOptimisticComment(optimisticNewComment);
    setNewComment(""); // Clear input field

    try {
      // Simulate API call
      await addCommentToServer(newComment);
      // If API succeeds, no action needed as we already updated the state
    } catch (error) {
      // If API fails, revert the optimistic update
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== optimisticNewComment.id)
      );
      alert(error); // Show error message
    } finally {
      setOptimisticComment(null); // Reset optimistic state
    }
  };

  return (
    <div style={{ marginTop: "10%", marginLeft: "10%" }}>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Add Comment</button>

      {optimisticComment && (
        <p>Adding: {optimisticComment.text} (optimistic update)</p>
      )}
    </div>
  );
};

export default Comments;
