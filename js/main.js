"use strict";

const input = document.querySelector(".input");
const addButton = document.querySelector(".add-button");
// const deleteButton = document.querySelectorAll(".delete-button");
const tasksCheck = document.querySelector(".task__check");
let workField = document.querySelector(".tasks");
let tasksList = [];
let idCounter = 0;

const clearInput = function () {
	input.value = "";
};

const drawAnElement = function (task) {
	const taskPost = `
	<li class="task" id="${task.id}">
	<input class="task__check" type="checkbox">
	<p class="task__text">${task.task}</p>
	<button class="delete-button">Delete</button>
	</li>
	`;

	workField.innerHTML += taskPost;
};

const watcher = function () {
	console.log(workField);
	const tasks = document.querySelectorAll(".task");
	console.log("tasks: ", tasks);
};

addButton.addEventListener("click", function () {
	if (input.value) {
		const newTask = {
			id: idCounter + 1,
			task: input.value,
		};
		idCounter++;
		tasksList.push(newTask);
		console.log("tasksList: ", tasksList);
		drawAnElement(newTask);

		// Deleting task from list
		const deleteButton = document.querySelectorAll(".delete-button");
		for (let i = 0; i < deleteButton.length; i++) {
			deleteButton[i].addEventListener("click", function () {
				console.log(deleteButton[i].closest(".task").id);
				const taskId = deleteButton[i].closest(".task").id;
				console.log("Block's id: ", taskId);
				// tasksList.splice(taskId, taskId);
				console.log("before: ", tasksList);

				for (let j = 0; j < tasksList.length; j++) {
					if (tasksList[j].id == taskId) {
						console.log(
							"I need to delete the task contains id:",
							tasksList[j].id,
							"Index of this task is: ",
							j
						);
						tasksList.splice(j, 1);
						// break;
					}

					// if (tasksList[j].id === taskId) {
					// 	console.log("Delete this item:", tasksList[j]);
					// }
				}
				console.log("after: ", tasksList);

				deleteButton[i].closest(".task").remove();
			});
		}

		clearInput();
		// watcher();
	}
});

// if (tasksList) {
// 	for (let i = 0; i < deleteButton.length; i++) {
// 		deleteButton[i].addEventListener("click", function () {
// 			console.log(deleteButton[i]);
// 		});
// 	}
// }
