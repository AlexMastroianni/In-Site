const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  author_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  content: String,

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
