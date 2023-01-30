"use strict";

const input = document.querySelector(".input");
const addButton = document.querySelector(".add-button");
const tasksCheck = document.querySelector(".task__check");
const workField = document.querySelector(".tasks");
const taskElement = document.querySelector(".task");
const tasksTitle = document.querySelector(".tasks__title");

let tasksList = [];
let idCounter = 0;

const clearInput = function () {
	input.value = "";
};

const drawAnElement = function (task) {
	const taskPost = `
	  <li class="task" id="${task.id}">
	  <p class="task__text">${task.task}</p>
	  <button class="delete-button">Delete</button>
	  </li>
	`;
	workField.innerHTML += taskPost;
};

const toggleDone = function () {
	const taskText = document.querySelectorAll(".task__text");

	for (let k = 0; k < taskText.length; k++) {
		taskText[k].addEventListener("click", function () {
			this.classList.toggle("done");

			const idIemp = this.closest(".task").id;
			console.log(idIemp);

			tasksList[idIemp - 1].done = !tasksList[idIemp - 1].done;
			console.log(idIemp, tasksList[idIemp - 1].done);
			console.log(tasksList);
		});
	}
};

const addTask = function () {
	if (input.value != "") {
		tasksTitle.classList.remove("hidden");
		const newTask = {
			id: idCounter + 1,
			task: input.value,
			done: false,
		};
		idCounter++;
		tasksList.push(newTask);
		drawAnElement(newTask);

		toggleDone();

		// Deleting task from list
		const deleteButton = document.querySelectorAll(".delete-button");

		for (let i = 0; i < deleteButton.length; i++) {
			deleteButton[i].addEventListener("click", function () {
				const taskId = deleteButton[i].closest(".task").id;
				for (let j = 0; j < tasksList.length; j++) {
					if (tasksList[j].id == taskId) {
						tasksList.splice(j, 1);
					}
				}
				deleteButton[i].closest(".task").remove();

				if (tasksList.length === 0) {
					tasksTitle.classList.add("hidden");
				}
			});
		}
		clearInput();
	}
};

// Adding the task in list
addButton.addEventListener("click", addTask);
document.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		addTask();
	}
});
