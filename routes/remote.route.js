const express = require('express');
const remoteApiCtrl = require('../controllers/remote.controller')

const router = express.Router();

router.route('/')
    .get( remoteApiCtrl.list)

    
module.exports = router;