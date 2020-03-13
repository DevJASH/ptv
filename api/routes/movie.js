const express = require("express");
const router = express.Router();
const URL = require("url");
const request = require('request');

router.get("/:imdb",(req, res, next) => {
    const query = URL.parse(req.url,true).query;
    const filter = query.filter;
    const imdb = req.params.imdb;
    request('https://qazwsxedcrfvtgb.info/movie/' + imdb, function (error, response, body) {
        const obj = JSON.parse(body);  
        switch (filter) {
            case "title":
                res.send(obj.title);
                break;
            default:
                res.status(400).json({
                    Description: "The request was invalid.",
                });
        } 
    });
    
});
    

module.exports = router;