const newTask = document.querySelector(".new-task");
const NTInput = newTask.querySelector("input");
const clearBtn = document.querySelector("#clear");
const filter = document.querySelector(".tasks-area--filter input");
const taskList = document.querySelector("#collection");

newSubmit();

// Get value of NTInput when newTask is submitted
function newSubmit() {
  newTask.addEventListener("submit", createListItem);

  clearBtn.addEventListener("click", clearList);

  filter.addEventListener("keyup", filterTasks);

  filter.parentElement.addEventListener("submit", (e) => { e.preventDefault() });
}

function createListItem(e) {
  e.preventDefault();

  // Check if input is empty
  const inputVal = NTInput.value;
  if (inputVal.trim() === "") { return };

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
  p.appendChild(document.createTextNode(`${inputVal}`))
  div.appendChild(p)
  div.appendChild(a)
  taskList.appendChild(div);
  
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
    } 
  } 
}

function filterTasks(e) {
  const taskContent = taskList.querySelectorAll(".task-item");
  const filterInput = e.target.value;

  taskContent.forEach(task => {
    if (task.firstChild.textContent.indexOf(filterInput) !== -1) {
      task.classList.remove("remove");
    } else {
      task.classList.add("remove");
    }
  })
}