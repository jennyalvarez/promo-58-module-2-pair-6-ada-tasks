const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

const taskList = document.querySelector('.js_task_list');
const taskInput = document.querySelector('.js_task_input');
const taskButton = document.querySelector('.js_task_button');


function paintTask () {
taskList.innerHTML = taskInput.value;    
}


for (const task of tasks) {
 taskList.innerHTML += `
 <li>${task.name}</li>
 `
}

taskButton.addEventListener("click", paintTask, (ev) => {
  ev.preventDefault;
  taskList.innerHTML += paintTask;
  return;
})