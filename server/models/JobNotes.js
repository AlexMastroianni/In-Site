const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
  author: String,
  content: String,
  PostDate: {
    type: Date,
    default: Date.now,
  },
  comments: [Comment.schema],
});

const Note = model('note', noteSchema);

module.exports = Note;
