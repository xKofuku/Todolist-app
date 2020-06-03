let express = require("express");
app = express();
port = process.env.PORT || 3000;

//Routes
let todoRoutes = require("./routes/todos");

app.get("/", (req, res) => {
	res.send("Hello from the root route");
});

//Using routes
app.use("/api/todos", todoRoutes);

app.listen(port, () => {
	console.log(`Server started on port ` + process.env.PORT);
});
