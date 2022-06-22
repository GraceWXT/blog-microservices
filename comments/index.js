const express = require("express");
const bodyParser = require("body-parser");

const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser.json());

const comments = {};

app.get("/posts/:id/comments", (req, res) => {

});

app.post("/posts/:id/comments", (req, res) => {
  // Generate a random id for the comment
  const commentId = randomBytes(4).toString("hex");
  const postId = req.params.id;

  const { content } = req.body;

  // The comments for a given post ID is an existing array or undefined
  // if undefined, initialize to an empty array
  if (!comments[postId]) {
    comments[postId] = []
  };

  // Add the new comment to the array
  comments[postId].push({ id: commentId, content });

  // Response with the updated comments array for this post
  res.status(201).send(comments[postId]);
});

app.listen(4001, () => {
  console.log("Comments listening on port 4001");
});
