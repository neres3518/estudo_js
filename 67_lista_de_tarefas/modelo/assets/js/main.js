const input_task = document.querySelector('.input-new-task');
const btn_task = document.querySelector('.btn-add-task');
const ul_task = document.querySelector('.ul-task');

function createLi() {
  const li = document.createElement('li');
  return li;
}

function createBtnDelete(li) {
  li.innerText += ' '
  const btnDelete = document.createElement('button');
  btnDelete.innerText = 'Apagar';
  //--> poderiamos fazer assim:
  // btnDelete.classList.add('<nome da classe>')
  //--> ou assim:
  btnDelete.setAttribute('class', 'delete');
  li.appendChild(btnDelete);
}
input_task.addEventListener('keypress', function(e){
  if (e.keyCode === 13){
    if (!input_task.value) return;
    criaTarefa(input_task.value);
  };
});
function limpaInput() {
  input_task.value = '';
  input_task.focus();
}
function criaTarefa(t) {
  const li = createLi();
  li.innerText = t;
  ul_task.appendChild(li);
  limpaInput();
  createBtnDelete(li);
  saveTasks();
}

btn_task.addEventListener('click', function (e)  {
  if (!input_task.value) return;
  criaTarefa(input_task.value);

});

document.addEventListener('click', function(e){
  const el = e.target;
  if (el.classList.contains('delete')) {
    el.parentElement.remove();
  }
})
function saveTasks() {
  const liTasks = document.querySelectorAll('li');
  const tasksList = [];
  for (let tarefa of liTasks){
    let taskText = tarefa.innerText;
    taskText = taskText.replace('Apagar', '').trim();
    tasksList.push(taskText);
  }
  const tasksJSON = JSON.stringify(tasksList);
  console.log(tasksJSON);
  localStorage.setItem('tasksJSON', tasksJSON);
}


function addSavedTasks() {
  const tasks = localStorage.getItem('tasksJSON');
  const tasksList = JSON.parse(tasks);
  console.log(tasksList);
  for (let task of tasksList) {
    criaTarefa(task);
  }

}
addSavedTasks();
