let express = require("express");
app = express();
port = process.env.PORT || 3000;


app.get("/", (req, res) => {
	res.send("TESTING");
});

app.listen(port, () => {
	console.log(`Server started on port ` + process.env.PORT);
});
