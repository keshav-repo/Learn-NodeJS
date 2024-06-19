const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  tags: [String],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

mongoose.connect("mongodb://localhost:27017/blogDB");

const Post = mongoose.model("Post", postSchema);

const newPost = new Post({
  title: "Sample Blog Post",
  author: "Author Name",
  content: "<p>This is the HTML content of the blog post.</p>",
  tags: ["sample", "blog", "post"],
});

newPost.save().then(() => console.log("Post saved!"));

const post = await Post.findById(postId);
