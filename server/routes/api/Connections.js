const express = require('express');
const router = express.Router();
const ConnectionController = require('../../controllers/ConnectionController');


router.route('/')
    .get(ConnectionController.getAllFollowers)
    .post(ConnectionController.addFollower)



module.exports = router;