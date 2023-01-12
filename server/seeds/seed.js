const db = require('../config/connection');
const { User, Site, Note, Comment } = require('../models');

const userData = require('./userData.json');
const siteData = require('./siteData.json');
const noteData = require('./noteData.json');
const commentData = require('./commentData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Site.deleteMany({});
  await Note.deleteMany({});
  await Comment.deleteMany({});

  await User.insertMany(userData);
  await Site.insertMany(siteData);
  await Note.insertMany(noteData);
  await Comment.insertMany(commentData);

  console.log('Database Has been Seeded');
  process.exit(0);
});
