document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const createTasks = document.querySelector('#create-task-form')
  createTasks.addEventListener('submit', formTask)


  function formTask(e){
      e.preventDefault()
      const newTask = document.querySelector('#new-task-description').value
      const newListItem = document.createElement('li')
      const tasksList = document.querySelector('#tasks')
      newListItem.textContent = newTask
      tasksList.append(newListItem)
  }
    
});