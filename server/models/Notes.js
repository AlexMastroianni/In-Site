const mongoose = require('mongoose');

const { Schema } = mongoose;

const notesSchema = new Schema({
  author: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const Note = mongoose.model('Note', notesSchema);

module.exports = Note;
