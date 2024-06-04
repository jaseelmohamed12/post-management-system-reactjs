import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, onEdit, onDelete }) => {
  // Check if posts array is empty
  if (!posts || posts.length === 0) {
    return <p style={{ textAlign: "center", fontSize: "18px", color: "#333" }} >No posts available.</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        // Check if post object is valid
        post && post.id ? (
          <PostItem
            key={post.id}
            post={post}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ) : null
      ))}
    </div>
  );
};

export default PostList;
