//Define UI VArs

const form =document.getElementById('task-form');
const taskList=document.querySelector('.collection')
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.getElementById('filter');
const taskInput=document.getElementById('task');
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
}
//sds
// Add Task
function addTask(e) {
//   if(taskInput.value === '') {
//     alert('Add a task');
//   }
 // Create li element
 const li = document.createElement('li');
 // Add class
 li.className = 'collection-item';
 // Create text node and append to li
 li.appendChild(document.createTextNode(taskInput.value));
 // Create new link element
 const link = document.createElement('a');
 // Add class
 link.className = 'delete-item secondary-content';
 // Add icon html
 link.innerHTML = '<i class="fa fa-remove"></i>';
 // Append the link to li
 li.appendChild(link);

 // Append li to ul
 taskList.appendChild(li);

 // Clear input
 taskInput.value = '';

 e.preventDefault();
}