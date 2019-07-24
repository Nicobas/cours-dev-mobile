const express = require('express');
const router = express.Router();

const users = require('../data/users');

router.get('/', function (req, res, next) {
    res.status(200).json({
        users: users.map((item) => {
            return {
                id: item.id,
                name: item.name,
                age: item.age,
            }
        })
    })
});

router.get('/:id',
    function (req, res, next) {
        req.user = users.find(item => (item.id + '') === req.params.id);

        next();
    },
    function (req, res, next) {
        if (!req.user) {
            res.status(404).json();
            return;
        }

        next();
    },
    function (req, res, next) {
        res.status(200).json({
            user: {
                id: req.user.id,
                name: req.user.name,
                age: req.user.age,
            }
        });
    });

module.exports = router;