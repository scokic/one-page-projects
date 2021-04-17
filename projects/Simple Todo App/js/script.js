// Tasks
let tasks = [{ taskName: "New task", taskStatus: false }];

let taskList = document.querySelector(".task-list");
let newTaskName = document.querySelector("#new-task-name");
let newTaskForm = document.querySelector(".new-task-form");

function newTaskSubmit() {
  let newTask = { taskName: newTaskName.value, taskStatus: false };
  tasks.push(newTask);
  console.log(newTask);

  let createNewTask = document.createElement("div");
  createNewTask.classList.add("task");

  let createNewTaskCheckbox = document.createElement("input");
  createNewTaskCheckbox.type = "checkbox";
  createNewTask.appendChild(createNewTaskCheckbox);

  let createNewTaskName = document.createElement("label");
  createNewTaskName.textContent = newTaskName.value;
  createNewTask.appendChild(createNewTaskName);

  taskList.appendChild(createNewTask);

  // Zaustavljanje automatskog refresh-a nakon submit-a
  function handleForm(event) {
    event.preventDefault();
  }
  newTaskForm.addEventListener("submit", handleForm);

  newTaskName.value = "";
  newTaskName.focus();
}
