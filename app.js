let express = require("express");
let bodyParser = require("body-parser");

let app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

//Routes
let todoRoutes = require("./routes/todos");

app.get("/", (req, res) => {
	res.render("index.html");
});

//Using routes
app.use("/api/todos", todoRoutes);

app.listen(port, () => {
	console.log(`Server started on port ` + process.env.PORT);
});
