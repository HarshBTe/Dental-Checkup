const express = require('express');
const { getDentists } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();
router.get('/dentists', auth, getDentists);

module.exports = router;
