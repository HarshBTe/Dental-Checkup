const mongoose = require('mongoose');

const checkupSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  dentist: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  images: [String],
  notes: [String],
}, { timestamps: true });

module.exports = mongoose.model('Checkup', checkupSchema);
