const mongoose = require('mongoose');

const { Schema } = mongoose;

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
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Note',
    },
  ],
});

const Site = mongoose.model('Site', siteSchema);

module.exports = Site;
