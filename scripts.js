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

  // Create text node for input value
  const input = document.createTextNode(`${inputVal}`);

  // Add everything togther
  p.appendChild(input)
  div.appendChild(p)
  taskList.appendChild(div);

  // Empty new task input
  NTInput.value = "";
}