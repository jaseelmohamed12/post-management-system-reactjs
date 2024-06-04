import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addOrEditPost = (post) => {
    if (currentPost) {
      setPosts(posts.map((p) => (p.id === post.id ? post : p)));
    } else {
      setPosts([...posts, post]);
    }
    setCurrentPost(null);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const editPost = (post) => {
    setCurrentPost(post);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ flex: "4", minWidth: "300px" }}>
        <PostForm post={currentPost} onSubmit={addOrEditPost} />
      </div>
      <div style={{ flex: "4", height: "100vh", overflowY: "auto", padding: "10px" }}>
        <PostList posts={posts} onEdit={editPost} onDelete={deletePost} />
      </div>
    </div>
  );
}

export default App;
