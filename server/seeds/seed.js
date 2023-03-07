const db = require('../config/connection');
const { User, Site, Note } = require('../models');

const userData = require('./userData.json');
const siteData = require('./siteData.json');
const noteData = require('./noteData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Site.deleteMany({});
  await Note.deleteMany({});

  await Note.insertMany(noteData);
  await User.insertMany(userData);
  await Site.insertMany(siteData);

  console.log('Database Has been Seeded');
  process.exit(0);
});
