const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Assuming you have a User model

module.exports = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {


    // Verify the token and decode it
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Replace with your secret key
    
    const user = await User.findById(decoded.id);  // Assuming the token contains the userId

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Attach user information to the request object
    req.user = user;
    next();

  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
