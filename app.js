var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));


app.set("view engine","ejs");
app.get("/", function(req, res){
    res.render("index");
});
app.get("/music", function(req, res){
    res.render("music");
});
app.get("/computer-science", function(req, res) {
    res.render('computer-science');
});
app.get("*", function(req, res) {
    res.render("not-found");
});

var port = process.env.PORT || 3000;

app.listen(port, process.env.IP, function() {
	console.log("app is running on " + port);
});