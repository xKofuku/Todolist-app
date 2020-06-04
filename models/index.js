let mongoose = require("mongoose");
mongoose.set("debug", true);
const uri =
	"mongodb+srv://Lance:admin@todo-list-app-cluster-0xay8.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
