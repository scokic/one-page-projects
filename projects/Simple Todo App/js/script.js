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

/* ------------------------------ ADD NEW TASK ------------------------------ */

function createNewTask() {
  if (newTaskName.value === "") {
    alert("pls fix");
  } else {
    let newTask = { taskName: newTaskName.value, taskStatus: false };
    tasks.push(newTask);

    taskList.insertAdjacentHTML(
      "beforeEnd",
      `
        <div class="task">
                <input type="checkbox"/>
                <label>${newTaskName.value}</label>
                <div class="delete-button">
                  <i class="fas fa-times"></i>
                </div>
              </div>
        `
    );

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
    if (tasks[i].taskStatus === true) {
      taskList.insertAdjacentHTML(
        "beforeEnd",
        `
          <div class="task">
                  <input type="checkbox" class="task-status" checked/>
                  <label>${tasks[i].taskName}</label>
                  <div class="delete-button">
                    <i class="fas fa-times"></i>
                  </div>
                </div>
          `
      );
    } else {
      taskList.insertAdjacentHTML(
        "beforeEnd",
        `
          <div class="task">
                  <input type="checkbox" class="task-status" />
                  <label>${tasks[i].taskName}</label>
                  <div class="delete-button">
                    <i class="fas fa-times"></i>
                  </div>
                </div>
          `
      );
    }
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

// selektuj task
// obriši task sa fronta
// obriši task iz liste svih taskova

/* ------------------------------ MARK TASK AS DONE ------------------------------ */
