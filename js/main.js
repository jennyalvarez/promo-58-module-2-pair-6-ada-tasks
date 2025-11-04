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

const taskListUl = document.querySelector(".js_task_list");
const taskInput = document.querySelector(".js_task_input");
const taskButton = document.querySelector(".js_task_button");

taskListUl.innerHTML = "";

for (const task of tasks) {
  if (task.completed === true) {
    taskListUl.innerHTML += `
<li class="completed"> 
<input type="checkbox" name="${task.name}" id="${task.id}" checked />
<label for="${task.id}">${task.name}</label>
</li>
`;
  } else {
    taskListUl.innerHTML += `
<li> 
<input type="checkbox" name="${task.name}" id="${task.id}" />
<label for="${task.id}">${task.name}</label>
</li>
`;
  }
}

/*
const gitHub_user = `susdiaz-sudo`;
const server_url = `https://dev.adalab.es/api/todo/${gitHub_user}`;

const gitHub_user_2 = `jennyalvarez`;
const server_url_2 = `https://dev.adalab.es/api/todo/${gitHub_user_2}`;


let tasks = [];

fetch(server_url)
  .then((response) => response.json())
  .then((data) => {
    tasks = data.results;
console.log("Tareas recibidas del servidor:", tasks);
  })

   .catch((error) => console.error("Error al obtener tareas:", error));
   console.log("Error al obtener tareas:",error); */
