const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
  author: [
    {
      type: Schema.Type.ObjectId,
      ref: 'User',
    },
  ],
  content: {
    type: String,
  },
  site_id: [
    {
      type: Schema.Type.ObjectId,
      ref: 'Site',
    },
  ],
  date: {
    type: Date,
  },
});

const Note = model('Note', noteSchema);

module.exports = Note;
