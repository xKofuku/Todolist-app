let express = require("express");
app = express();

app.get("/", (req, res) => {
	res.send("TESTING");
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server started on port ` + process.env.PORT);
});
