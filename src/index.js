document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit' , (e) => {
  e.preventDefault()
  createToDo(e.target['new-task-description'].value)
  })
});

function createToDo (toDoList) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener("click" , deleteBtn)
  btn.textContent = 'x'
  p.textContent = toDoList
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
  document.querySelector('form').reset()
  
}

function deleteBtn(e) {
  e.target.parentNode.remove()
}