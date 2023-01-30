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
  <label class="task__checkbox">
            <input class="task__check" type="checkbox">
            <span class="task__text">${task.task}</span>
          </label>

	  <button class="delete-button">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="black" />
            </svg>
    </button>
	  </li>
	`;
	workField.innerHTML += taskPost;
};

const toggleDone = function () {
	const taskText = document.querySelectorAll(".task__text");

	for (let k = 0; k < taskText.length; k++) {
		taskText[k].addEventListener("click", function () {
			// this.classList.toggle("done");

			const elementId = this.closest(".task").id;

			console.log("elementId: ", elementId);

			// console.log(elementId, tasksList[elementId - 1].done);
			for (let i = 0; i < tasksList.length; i++) {
				if (tasksList[i].id == elementId) {
					tasksList[i].done = !tasksList[i].done;
				}
			}
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
