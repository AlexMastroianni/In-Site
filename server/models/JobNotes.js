const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
  author: String,
  content: String,
  siteId: {
    type: Schema.Types.ObjectId,
    ref: 'Site',
  },
});

const Note = model('Note', noteSchema);

module.exports = Note;
