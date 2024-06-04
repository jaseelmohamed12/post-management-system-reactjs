const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let posts = [];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  const post = req.body;
  post.id = Date.now();
  posts.push(post);
  res.json(post);
});

app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const updatedPost = req.body;
  posts = posts.map((post) => (post.id === parseInt(id) ? updatedPost : post));
  res.json(updatedPost);
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  posts = posts.filter((post) => post.id !== parseInt(id));
  res.json({ message: "Post deleted" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
