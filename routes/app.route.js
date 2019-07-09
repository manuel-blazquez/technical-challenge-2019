const express = require('express');
const router = express.Router();

const remoteApiRoutes = require('./remote.route');

router.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Request resolved correctly'
    })
})

router.use('/remoteAPI', remoteApiRoutes)

module.exports = router;
