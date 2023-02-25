const { Schema, model } = require('mongoose');

const siteSchema = new Schema({
  name: String,
  lat: String,
  long: String,
  classifcation: {
    type: String,
    enum: ['Residenal', 'Commersial', 'Industrial'],
  },
  category: {
    type: String,
    enum: ['Reno', 'Re-Build', 'Service'],
  },
});

const Site = model('Site', siteSchema);

module.exports = Site;
