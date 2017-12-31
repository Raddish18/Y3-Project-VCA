const express = require("express");
const url = require('url');
let router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
    let data = url.parse(req.url, true).query;
    let hrefQuery = "?uid="+ data.uid;

    res.render("manageBusinesses", {title: "Manage Business\"s", userQuery: hrefQuery}) ;
});

module.exports = router;
