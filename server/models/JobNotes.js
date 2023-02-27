const { Schema, model } = require('mongoose');
const Comments = require('./Comments');

const noteSchema = new Schema({
  author: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  // comments: [Comments.Schema],
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const Note = model('note', noteSchema);

module.exports = Note;
