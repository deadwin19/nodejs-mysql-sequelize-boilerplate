var express = require('express')

var router = express.Router()

const blogRouter = require('./blog.route');

router.use('/blog', blogRouter);


module.exports = router;