$(document).ready(function () {
	//loads all
	$.getJSON("/api/todos").then(addTodos);

	//input
	$("#todoInput").keypress(function (event) {
		if (event.which == 13) {
			createTodo($(this));
		}
	});

	//toggle completion
	$(".list").on("click", "li", function () {
		updateTodo($(this));
	});

	//deleting
	$(".list").on("click", "span", function (event) {
		event.stopPropagation(); //won't trigger the span
		removeTodo($(this).parent());
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

//Refactors, Listing all todo, Creating them dynamically
function addTodo(todo) {
	var newTodo = $("<li class='task'>" + todo.name + "<span>X</span></li>");
	newTodo.data("id", todo._id);
	newTodo.data("completed", todo.completed);
	if (todo.completed) {
		newTodo.addClass("done");
	}
	$(".list").append(newTodo);
}

//Removes Todo
function removeTodo(todo) {
	let clickedStoredId = todo.data("id");
	let deleteUrl = "/api/todos/" + clickedStoredId;
	$.ajax({
		method: "DELETE",
		url: deleteUrl,
	})
		.then(function (data) {
			todo.remove();
		})
		.catch(function (err) {
			console.log(err);
		});
}

function updateTodo(todo) {
	let updateUrl = "/api/todos/" + todo.data("id");
	let isDone = !todo.data("completed");
	let updateData = { completed: isDone };
	$.ajax({
		method: "PUT",
		url: updateUrl,
		data: updateData,
	}).then(function (updatedTodo) {
		todo.toggleClass("done");
		todo.data("completed", isDone);
	});
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
