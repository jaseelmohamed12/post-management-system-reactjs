import React from "react";

const PostItem = ({ post, onEdit, onDelete }) => {
  const postItemStyle = {
    backgroundColor: "#f9f9f9",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    marginBottom: "40px",
    width: "50%",
    margin: "20px auto 0",
    fontFamily: "Arial, sans-serif",
  };  

  const titleStyle = {
    fontSize: "24px",
    marginBottom: "10px",
  };

  const contentStyle = {
    fontSize: "16px",
    marginBottom: "15px",
  };

  const buttonContainerStyle = {
    textAlign: "center",
    display: "flex",
    justifyContent: "flex-end",
  };

  const buttonStyle = {
    marginRight: "10px",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    transition: "background-color 0.3s",
  };

  const editButtonHoverStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
  };

  const deleteButtonHoverStyle = {
    backgroundColor: "#f44336",
    color: "white",
  };

  return (
    <div style={postItemStyle}>
      <h2 style={titleStyle}>{post.title}</h2>
      <p style={contentStyle}>{post.content}</p>
      <div style={buttonContainerStyle}>
        <button style={{ ...buttonStyle, ...editButtonHoverStyle }} onClick={() => onEdit(post)}>Edit</button>
        <button style={{ ...buttonStyle, ...deleteButtonHoverStyle }} onClick={() => onDelete(post.id)}>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
