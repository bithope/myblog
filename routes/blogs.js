var express = require("express");
var router = express.Router();
const Blogs = require("../models/blogs");

/* GET blogs listing. */
router.get("/", function (req, res, next) {
    res.render("blogs/index", { data:"ข้อมูลบทความ" });
});

/* GET blogs/add listing. */
router.get("/add", function (req, res, next) {
    res.render("blogs/addForm", { data:"เพิ่มบทความ" });
});

router.post("/add", function (req, res, next) {
    data = new Blogs({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
    });
    Blogs.create(data)
        .then(function (result) {
            res.redirect("/");
        }) // ห้ามใช้ ;
        .catch(function (err) {
            console.log(err);
            res.status(500).send("Error adding blog");
        });
});

module.exports = router;
