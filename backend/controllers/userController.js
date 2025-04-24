const User = require('../models/User');

exports.getDentists = async (req, res) => {
  const dentists = await User.find({ role: 'dentist' }).select('-password');
  res.json(dentists);
};
