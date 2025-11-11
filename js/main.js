"use strict"
/*
// -------------------------------------array ---------------------------------------------------
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

// -----------------------------------------constantes --------------------------------------------------
const taskListUl = document.querySelector(".js_task_list");
const taskInput = document.querySelector(".js_task_input");
const taskButton = document.querySelector(".js_task_button");

// -------------------------------------- función ---------------------------------------------------
function renderTask() { // 

taskListUl.innerHTML = ""; // 

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
  }
*/

const taskListUl = document.querySelector(".js_task_list");
const newTaskInput = document.querySelector(".js_task_input");
const taskButton = document.querySelector(".js_task_button");

taskButton.addEventListener("click", function () {
  const newTask = newTaskInput.value();
  if (newTask === "") {
    return;
  }

  const newTaskList = document.createElement("li");
  const newContentList = document.createTextNode(newTask);
  newTaskList.appendChild(newContentList);

  taskListUl.appendChild(newTaskList);

  newTaskInput.value = "";
});



/*
// -----------------------------------------constantes----------------------------------------
const taskListUl = document.querySelector(".js_task_list");

const gitHub_user = `susdiaz-sudo`;
const server_url = `https://dev.adalab.es/api/todo/${gitHub_user}`;

const gitHub_user_2 = `jennyalvarez`;
const server_url_2 = `https://dev.adalab.es/api/todo/${gitHub_user_2}`;

// ---------------------------------------------petición al server------------------------------------------

fetch(server_url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.info); // información de la respuesta a la petición con el contenido que incluye la url
    console.log(data.results); // información de las tareas de la url
    tasks = data.results; // tareas

    function renderTask() { // función para pintar el contenido de las tareas
      taskListUl.innerHTML = ""; // limpia el contenido del elemento "lista de tareas"

      for (const task of tasks) { // para cada tarea de la lista de tareas
        if (task.completed === true) { // si la tarea está completada (true), pinta la tarea con la clase "completed" para tachar la tarea y "checked" para que aparezca el tic. 
          taskListUl.innerHTML += `   
      <li class="completed">
      <input type="checkbox" name="${task.name}" id="${task.id}" checked />
      <label for="${task.id}">${task.name}</label>
      </li> 
      `;
        } else {   // si la tarea no está completada (false), pinta la tarea sin la clase y sin el tic.
          taskListUl.innerHTML += `
      <li>
      <input type="checkbox" name="${task.name}" id="${task.id}" />
      <label for="${task.id}">${task.name}</label>
      </li>
      `;
        }
      }
    }
    renderTask();  // llamada a la función
  })

  .catch((error) => {
    console.error("Error al obtener tareas:", error);
  });
  */
