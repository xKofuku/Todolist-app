$(document).ready(function () {
	$.getJSON("/api/todos").then(addTodos);

	$("#todoInput").keypress(function (event) {
		if (event.which == 13) {
			createTodo();
		}
	});

	$(".list").on("click", "span", function () {
		console.log("click");
	});
});
//Display all Todo
function addTodos(todos) {
	todos.forEach(function (todo) {
		addTodo(todo);
	});
}
//Adds new Todo
function createTodo() {
	var userInput = $("#todoInput").val();
	$.post("/api/todos/", { name: userInput })
		.then(function (newTodo) {
			$("#todoInput").val("");
			addTodo(newTodo);
		})
		.catch(function (err) {
			console.log(err);
		});
}

//Refactors
function addTodo(todo) {
	var newTodo = $("<li class='task'>" + todo.name + "<span>X</span></li>");

	if (todo.completed) {
		newTodo.addClass("done");
	}
	$(".list").append(newTodo);
}

//NO JQUERY

// var unorderedList = document.querySelector(".list");

// window.addEventListener("load", function () {
// 	fetch("/api/todos").then(parseJSON).then(addTodos).catch(displayError);
// });

// function parseJSON(res) {
// 	return res.json().then(function (parsedData) {
// 		return parsedData;
// 	});
// }

// function addTodos(todos) {
// 	todos.forEach(function (todo) {
// 		var listitem = document.createElement("li");
// 		listitem.classList.add("task");
// 		listitem.innerHTML = todo.name;
// 		if (todo.completed) {
// 			listitem.classList.add("done");
// 		}
// 		unorderedList.appendChild(listitem);
// 	});
// }

// function displayError(err) {
// 	console.log(err);
// }
