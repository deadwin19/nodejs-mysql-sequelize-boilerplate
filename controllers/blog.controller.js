var blogModel = require('../models/blog.model');

class blogController {

    getBlogs = async(req, res, next) => {
        try {
            const blog = await blogModel.findAll();
            res.send(blog);
        } catch (err) {
            console.log(err);
        }
    }

    createBlog = async(req, res, next) => {
        try {
            await blogModel.create(req.body);
            res.json({
                "message": "Blog Created"
            });
        } catch (err) {
            console.log(err);
        }
    }

    getBlogById = async (req, res) => {
        try {
            const blog = await blogModel.findAll({
                where: {
                    blog_id: req.params.id
                }
            });
            res.send(blog[0]);
        } catch (err) {
            console.log(err);
        }
    }

    updateBlog = async (req, res) => {
        try {
            await blogModel.update(req.body, {
                where: {
                    blog_id: req.params.id
                }
            });
            res.json({
                "message": "Blog Updated"
            });
        } catch (err) {
            console.log(err);
        }
    }

    deleteBlog = async (req, res) => {
        try {
            await blogModel.destroy({
                where: {
                    blog_id: req.params.id
                }
            });
            res.json({
                "message": "Blog Deleted"
            });
        } catch (err) {
            console.log(err);
        }
    }

}

module.exports = new blogController