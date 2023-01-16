const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
  },
  siteId: {
    type: Schema.Types.ObjectId,
    ref: 'Site',
  },

  date: String,
});

const Note = model('Note', noteSchema);

module.exports = Note;
