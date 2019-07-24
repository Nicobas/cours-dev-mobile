const express = require('express');
const router = express.Router();

router.post('/login', function (req, res, next) {

    // req.body
    // req.query
    // req.headers
    // req.params

    console.log(req.headers.authorization);

    res.status(201).json({
        name: 'Bastien'
    })
});


module.exports = router;