"use strict";

let tasks = [
  { taskName: "New task", taskStatus: false, taskId: 1 },
  { taskName: "New task 2", taskStatus: true, taskId: 2 },
  { taskName: "New task 3", taskStatus: true, taskId: 3 },
];

let taskList = document.querySelector(".task-list");
let taskEditButton = document.querySelector(".edit-button");
let newTaskName = document.querySelector("#new-task-name");
let newTaskForm = document.querySelector(".new-task-form");
let deleteTaskButtons = document.querySelector(".delete-button");

/* ------------------------------ CREATE UUID ------------------------------ */

function createUUID() {
  let dt = new Date().getTime();

  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );

  return uuid;
}

/* ------------------------------ ADD NEW TASK ------------------------------ */

function createNewTask() {
  if (newTaskName.value === "") {
    alert("pls fix");
  } else {
    let id = createUUID();
    let newTask = {
      taskName: newTaskName.value,
      taskStatus: false,
      taskId: id,
    };
    tasks.push(newTask);

    taskList.insertAdjacentHTML(
      "beforeEnd",
      `
        <div class="task" id=${id}>
                <input type="checkbox"/>
                <label>${newTaskName.value}</label>
                <div class="delete-button">
                  <i class="fas fa-times"></i>
                </div>
              </div>
        `
    );

    console.log(id);

    newTaskName.value = "";
    newTaskName.focus();
  }

  //Zaustavljanje automatskog refresh-a nakon submit-a
  function handleForm(event) {
    event.preventDefault();
  }
  newTaskForm.addEventListener("submit", handleForm);
}

/* ------------------------------ READ EXISTING TASKS ------------------------------ */

function printTasks() {
  let i;
  for (i = 0; i < tasks.length; i++) {
    let status = tasks[i].taskStatus === true ? "checked" : "";
    let id = tasks[i].taskId;
    taskList.insertAdjacentHTML(
      "beforeEnd",
      `
          <div class="task" id="${id}">
                  <input type="checkbox" class="task-status" ${status}/>
                  <label>${tasks[i].taskName}</label>
                  <div class="delete-button">
                    <i class="fas fa-times"></i>
                  </div>
                </div>
          `
    );
  }
}

printTasks();

/* ------------------------------ TOGGLE EDIT BUTTON ------------------------------ */

// prikazivanje dugmeta za brisanje taskova
taskEditButton.addEventListener("click", () => {
  if (taskList.classList.contains("hidden")) {
    taskList.classList.remove("hidden");
    taskEditButton.textContent = "CANCEL";
    taskEditButton.style.backgroundColor = "#505767";
  } else {
    taskList.classList.add("hidden");
    taskEditButton.textContent = "EDIT";
    taskEditButton.style.backgroundColor = "#ef7157";
  }
});

/* ------------------------------ DELETE A TASK ------------------------------ */

document.querySelectorAll(".delete-button").forEach((delBtn) => {
  delBtn.addEventListener("click", () => {
    let selectedTask = delBtn.parentElement;
    let selectedTaskId = delBtn.parentElement.id;

    //brisanje sa fronta
    selectedTask.remove();

    //brisanje iz array-a
    function checkId(tasks) {
      return tasks.taskId == selectedTaskId;
    }

    let taskIdIndex = tasks.findIndex(checkId);
    tasks.splice(taskIdIndex, 1);
  });
});
