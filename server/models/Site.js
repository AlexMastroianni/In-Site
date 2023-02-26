const { Schema, model } = require('mongoose');
const Note = require('./JobNotes');

const siteSchema = new Schema({
  name: String,
  lat: Number,
  long: Number,
  classifcation: {
    type: String,
    enum: ['Residenal', 'Commersial', 'Industrial'],
  },
  category: {
    type: String,
    enum: ['Reno', 'Re-Build', 'Service'],
  },
  users: [User.schema],
  notes: [Note.schema],
});

const Site = model('Site', siteSchema);

module.exports = Site;
