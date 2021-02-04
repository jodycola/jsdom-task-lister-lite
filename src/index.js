document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const createTasks = document.getElementById('create-task-form')
  createTasks.addEventListener('submit', formTask)


  function formTask(e){
      e.preventDefault()
      const newTask = document.querySelector('#new-task-description').value
      const newListItem = document.createElement('li')
      const tasksList = document.getElementById('tasks')
      newListItem.textContent = newTask
      tasksList.append(newListItem)
  }
    
});