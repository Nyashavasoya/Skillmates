const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
router.get('/:username',userController.getUser)
router.get('/getUser/:userID',userController. getUserByID)

module.exports = router;