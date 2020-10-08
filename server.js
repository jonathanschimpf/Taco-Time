var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();


// serve static content for the app from the "public" directory in the application directory.

app.use(express.static("public"));


// parse request body as JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// set handlebars.

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// import routes and give the server access to them.

var routes = require("./controllers/tacos_controller.js");

app.use(routes);

app.listen(PORT, function() {

  console.log("Application now listening at localhost:" + PORT);

});
