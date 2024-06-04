import React, { useState, useEffect } from "react";

const PostForm = ({ post, onSubmit }) => {
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: post ? post.id : Date.now(), title, content });
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
  };

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const inputStyle = {
    marginBottom: "10px",
    padding: "8px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "vertical",
    minHeight: "100px",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
  };

  const headerStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333",
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={headerStyle}>Welcome to Our Post Management System</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={inputStyle}
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          style={textareaStyle}
          required
        />
        <div style={buttonContainerStyle}>
          <button type="submit" style={buttonStyle}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
