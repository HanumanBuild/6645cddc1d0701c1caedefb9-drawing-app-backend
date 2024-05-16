const express = require('express');
const { saveDrawing, getDrawings } = require('../controllers/drawingController');
const router = express.Router();

router.post('/', saveDrawing);
router.get('/', getDrawings);

module.exports = router;