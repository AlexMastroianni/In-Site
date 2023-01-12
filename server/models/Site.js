const { Schema, model } = require('mongoose');

const siteSchema = new Schema({
  lat: {
    type: Number,
    min: 0,
    default: 0,
  },
  Long: {
    type: Number,
    min: 0,
    default: 0,
  },
  classifcation: {
    type: String,
    enum: ['Residenal', 'Commersial', 'Industrial'],
  },
  catorgery: {
    type: String,
    enum: ['Reno', 'Re-Build', 'Service'],
  },
});

const Site = model('Site', siteSchema);

module.exports = Site;
