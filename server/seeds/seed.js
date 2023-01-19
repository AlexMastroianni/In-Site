const db = require('../config/connection');
const { User, Site, Posts } = require('../models');

const userData = require('./userData.json');
const siteData = require('./siteData.json');
const postData = require('./postData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Site.deleteMany({});

  await User.insertMany(userData);
  await Site.insertMany(siteData);

  console.log('Database Has been Seeded');
  process.exit(0);
});
