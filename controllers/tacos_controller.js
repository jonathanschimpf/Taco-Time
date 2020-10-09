// require express + establish route as a variable.

var express = require("express");

var router = express.Router();


// import the model (taco.js) to use its database functions.

var taco = require("../models/tacoModel.js");


// create all our routes and set up logic within the routes.

router.get("/", function (req, res) {

    taco.all(function (data) {

        var hbsObject = { tacos: data };

        console.log(hbsObject);

        //results array from tacos table --> index.handlebars

        res.render("index", hbsObject);

    });

});


//--//


router.post("/api/tacos", function (req, res) {

    // columns that exist in tacos table

    taco.create(["taco_name", "devoured"],

        [req.body.taco_name, req.body.devoured],

        function (result) {

            // send back the ID of the new taco

            res.json({ id: result.insertId });

        });

});


//--//


router.put("/api/tacos/:id", function (req, res) {

    var condition = "id = " + req.params.id;

    console.log("condition:", condition);

    taco.update({ devoured: req.body.devoured }, condition,

        function (result) {

            if (result.changedRows == 0) {

                // if no rows were changed, then the ID must not exist, so 404, bruh.

                return res.status(404).end();

            } else {

                res.status(200).end();
            }

        });

});


// deleting route (if time allows, not a requirement)

router.delete("/api/tacos/:id", (req, res) => {

    const tacoId = req.params.id;

    taco.delete(tacoId, function () {

        res.status(200).end();

    });

});




module.exports = router;