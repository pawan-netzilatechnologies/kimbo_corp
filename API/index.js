const express = require('express')
const router = express.Router()
const Blogs = require('../models/Blogs')
const secret = "3asba";

router.get('/', (req, res) => {
    Blogs.find()
        .then(blogs => {
            if (!user) {
                return res.status(400).json({ msg: 'No Blogs found' })
            } else {
                res.send(blogs)
            }
        })
        .catch(err => res.json({ msg: 'Server error' }))
});

module.exports = router