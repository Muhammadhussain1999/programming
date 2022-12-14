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
  taskList.addEventListener('click',removeTask)
  clearBtn.addEventListener('click',clearTask)
  //Filter
  filter.addEventListener('keyup',filterTask);
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

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you Sure?'))
    e.target.parentElement.parentElement.remove();
  }
}
function clearTask(){
  //taskList.innerHTML='';
  //Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}
function filterTask(e){
  const text=e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (task){
    const item=task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display= 'block';
    }
    else{
      task.style.display='none';
    }
  });
}