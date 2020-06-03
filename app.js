let express = require("express");
app = express();
port = process.env.PORT || 3000;

//Mongo Atlas Driver
const MongoClient = require("mongodb").MongoClient;
const uri =
	"mongodb+srv://Lance:admin@todo-list-app-cluster-0xay8.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
	const collection = client.db("test").collection("devices");
	// perform actions on the collection object
	client.close();
});

app.get("/", (req, res) => {
	res.send("TESTING");
});

app.listen(port, () => {
	console.log(`Server started on port ` + process.env.PORT);
});
