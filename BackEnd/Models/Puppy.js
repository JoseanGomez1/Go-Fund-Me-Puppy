const mongoose = require('mongoose');

const puppySchema = new mongoose.Schema({
  dogtype: { type: String, required: true },
  description: { type: String, required: true },
  fundinggoal: { type: Number, required: true },
  currentFunding: { type: Number, default: 0.0 },
  imageURL: { type: String, required: true },
  deadlineDate: { type: Date, default: Date.now },
});

const Puppy = mongoose.model('Puppy', puppySchema);

module.exports = Puppy;
