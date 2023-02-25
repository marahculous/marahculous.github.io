const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

// add new task to list
function addTask(event) {
  event.preventDefault();
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    const dueDate = getDueDate();
    const taskItem = createTaskItem(taskText, dueDate);
    taskList.appendChild(taskItem);
    newTaskInput.value = "";
  }
}

// create new task item with text and due date
function createTaskItem(taskText, dueDate) {
  const taskItem = document.createElement("li");
  taskItem.innerText = taskText;
  if (dueDate) {
    const dueDateSpan = document.createElement("span");
    dueDateSpan.classList.add("due-date");
    dueDateSpan.innerText = dueDate;
    taskItem.appendChild(dueDateSpan);
  }
  const deleteTaskButton = document.createElement("span");
  deleteTaskButton.classList.add("delete-task");
  deleteTaskButton.innerText = "X";
  deleteTaskButton.addEventListener("click", deleteTask);
  taskItem.appendChild(deleteTaskButton);
  taskItem.addEventListener("click", toggleChecked);
  return taskItem;
}

// get due date from user input
function getDueDate() {
  const dueDateInput = prompt("Enter due date (optional):");
  if (dueDateInput) {
    const dueDate = new Date(dueDateInput);
    if (!isNaN(dueDate)) {
