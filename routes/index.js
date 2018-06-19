var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/api/skydives', db.getAllJumps);
router.get('/api/skydives/:id', db.getJump);
router.post('/api/skydives', db.addJump);
router.put('/api/skydives/:id', db.updateJump);
router.delete('/api/skydives/:id', db.removeJump);


module.exports = router;
