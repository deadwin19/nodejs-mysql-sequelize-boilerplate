const express = require('express');
const router = express.Router();


const blogController = require('../controllers/blog.controller')

router.post('/blogs', blogController.createBlog);
router.get('/blogs', blogController.getBlogs);
router.get('/blogs/:id', blogController.getBlogById);

module.exports = router;