const addTaskButton = document.getElementById('add-task-btn');
addTaskButton.addEventListener('click', function() {
  const newTaskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  // Create a new task item and delete button
  const newTaskItem = document.createElement('li');
  newTaskItem.classList.add('task');

  const newTaskName = document.createElement('span');
  newTaskName.classList.add('task-name');
  newTaskName.textContent = newTaskInput.value;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-task', 'btn', 'btn-danger');
  deleteButton.textContent = 'Delete';

  // Add the new task item and delete button to the list
  newTaskItem.appendChild(newTaskName);
  newTaskItem.appendChild(deleteButton);
  taskList.appendChild(newTaskItem);

  // Clear the input field
  newTaskInput.value = '';
});
