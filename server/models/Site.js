const { Schema, model } = require('mongoose');

const siteSchema = new Schema({
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  classifcation: {
    type: String,
  },
  catorgery: {
    type: String,
  },
});

const Site = model('Site', siteSchema);

module.exports = Site;
