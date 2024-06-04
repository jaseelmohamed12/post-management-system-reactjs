import React, { useState } from "react";
import PostForm from "./PostForm";

const PostManager = () => {
  const [editMode, setEditMode] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleEdit = (post) => {
    setEditMode(true);
    setSelectedPost(post);
  };

  const handleCreate = () => {
    setEditMode(false);
    setSelectedPost(null);
  };

  const handleSubmit = (editedPost) => {
    console.log("Edited Post:", editedPost);
    handleCreate();
  };

  return (
    <div>
      {editMode ? (
        <div>
          <h2>Edit Post</h2>
          <PostForm post={selectedPost} onSubmit={handleSubmit} />
        </div>
      ) : (
        <div>
          <h2>Create Post</h2>
          <PostForm onSubmit={handleSubmit} />
        </div>
      )}
      <button onClick={handleCreate}>Create New Post</button>
      <button onClick={() => handleEdit({ id: 1, title: "Sample Title", content: "Sample Content" })}>Edit Sample Post</button>
    </div>
  );
};

export default PostManager;
