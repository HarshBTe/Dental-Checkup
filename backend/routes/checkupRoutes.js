const express = require('express');
const upload = require('../middleware/uploadMiddleware');
const auth = require('../middleware/authMiddleware');
const {
  requestCheckup,
  uploadResult,
  getResults,
  getRequestedCheckups
} = require('../controllers/checkupController');

const router = express.Router();

router.post('/request/:id', auth, requestCheckup);
router.post('/upload/:id', auth, upload.array('images'), uploadResult);
router.get('/results', auth, getResults);
router.get('/requests', auth, getRequestedCheckups);

module.exports = router;
