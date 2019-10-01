const newTask = document.querySelector(".new-task");
const NTInput = newTask.querySelector("input");
const clearBtn = document.querySelector("#clear");
const filter = document.querySelector(".tasks-area--filter input");
const taskList = document.querySelector("#collection");

newSubmit();

// Get value of NTInput when newTask is submitted
function newSubmit() {
  window.addEventListener("load", firstLoad);

  newTask.addEventListener("submit", submitForm);

  clearBtn.addEventListener("click", clearList);

  filter.addEventListener("keyup", filterTasks);

  filter.parentElement.addEventListener("submit", (e) => { e.preventDefault() });
}

function createListItem(itemText){
    // Create div
    const div = document.createElement("div");
    div.classList.add("task-item");
    
    // Create p
    const p = document.createElement("p")
    p.classList.add("task-item--content");
    
    // Create recycle link
    const a = document.createElement("a")
    a.classList.add("recycle");
    a.addEventListener("click", recycleItem)
    
    // Add everything togther
    p.appendChild(document.createTextNode(`${itemText}`))
    div.appendChild(p)
    div.appendChild(a)
    taskList.appendChild(div);
}

function submitForm(e) {
  e.preventDefault();

  // Check if input is empty
  const inputVal = NTInput.value;
  if (inputVal.trim() === "") { return };

  createListItem(inputVal);

  // Add to LS
  addToLocalStorage(inputVal);
  
  // Empty new task input
  NTInput.value = "";
}

function recycleItem(e) {
  e.target.parentElement.remove();
}

function clearList() {
  if (taskList.firstChild !== null) {
    while(taskList.firstChild !== null) {
      taskList.firstChild.remove();
      localStorage.removeItem('tasks');
    }
  }
}

function filterTasks(e) {
  const taskContent = taskList.querySelectorAll(".task-item");
  const filterInput = e.target.value.toLowerCase();
  
  taskContent.forEach(task => {
    const taskLower = task.firstChild.textContent.toLowerCase();

    if (taskLower.indexOf(filterInput) !== -1) {
      task.classList.remove("removing");
    } else {
      task.classList.add("removing");
    }
  })
}

function addToLocalStorage(inputVal) {
  let tasks = getLocalStorage();

  tasks.push(inputVal);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getLocalStorage() {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  return tasks;
}

function firstLoad() {
  let tasks = getLocalStorage();

  tasks.forEach(task => createListItem(task));
}