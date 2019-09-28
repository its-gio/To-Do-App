const newTask = document.querySelector(".new-task");
const NTInput = newTask.querySelector("input");
const clearTasks = document.querySelector("#clear");
const filter = document.querySelector(".tasks-area--filter input");
const taskList = document.querySelector("#collection");

newSubmit();

// Get value of NTInput when newTask is submitted
function newSubmit() {
  newTask.addEventListener("submit", createListItem);
}

function createListItem(e) {
  e.preventDefault();

  // Check if input is empty
  const inputVal = NTInput.value;
  if (inputVal.trim() === "") { return };


  // Create div
  const div = document.createElement("div");
  div.setAttribute("class", "task-Item");

  // Create p
  const p = document.createElement("p")

  // Create recycle link
  const a = document.createElement("a")
  a.classList.add("recycle");

  
  // Add everything togther
  p.appendChild(document.createTextNode(`${inputVal}`))
  div.appendChild(p)
  div.appendChild(a)
  taskList.appendChild(div);
  
  console.log(div)
  // Empty new task input
  NTInput.value = "";
}