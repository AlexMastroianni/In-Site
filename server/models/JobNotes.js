const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  author: String,
  content: String,
});

const Post = model('post', postSchema);

module.exports = Post;
