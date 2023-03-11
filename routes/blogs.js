var express = require("express");
var router = express.Router();

/* GET blogs listing. */
router.get("/", function (req, res, next) {
    res.render("blogs/index", { data:"hello Mongoose" });
});

module.exports = router;
