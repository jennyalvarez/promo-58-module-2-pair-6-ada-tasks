/* const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
]; */

/*
const taskListUl = document.querySelector(".js_task_list");
const taskInput = document.querySelector(".js_task_input");
const taskButton = document.querySelector(".js_task_button");

function renderTask() {
  for (const task of tasks) {
    if (task.completed === true) {
      taskListUl.innerHTML += `
 <li class="completed">${task.name}</li>
 `;
    } else {
      taskListUl.innerHTML += `
 <li>${task.name}</li>
 `;
    }
  }
}

renderTask();
*/

// Usuario de GitHub para construir la URL del endpoint.
// Nota: este valor se usa únicamente para componer la URL del servidor de demo.
const gitHub_user = `susdiaz-sudo`;

// URL del servidor que devuelve las tareas. Debe interpolar el usuario correctamente.
// Antes había un identificador no definido (susdiaz_sudo); lo corregimos por gitHub_user.
const server_url = `https://dev.adalab.es/api/todo/${gitHub_user}`;

// Segundo usuario (opcional). Se deja aquí de referencia; no se usa en la llamada actual.
// Si quisieras alternar usuarios, actualiza la variable utilizada en fetch.
const gitHub_user_2 = `jennyalvarez`;
const server_url_2 = `https://dev.adalab.es/api/todo/${gitHub_user_2}`;

// Estado en memoria de las tareas. Se actualiza tras la obtención del servidor.
let tasks = [];

// Función para verificar que los datos representan una lista válida de tareas.
// Devuelve true solo si es un array con al menos un elemento.
function esListaDeTareasValida(lista) {
  return Array.isArray(lista) && lista.length > 0;
}

// Flujo de obtención de tareas utilizando la API de Promesas con then/catch.
// 1) Se solicita al servidor con fetch.
// 2) Se valida la respuesta HTTP.
// 3) Se parsea el JSON.
// 4) Se valida que el resultado sea una lista no vacía.
// 5) Se muestra el listado en consola o se informa de error.
fetch(server_url)
  // Paso 1 y 2: recibimos la respuesta y comprobamos que sea OK (2xx).
  .then(function (response) {
    // Si el estado no es correcto, lanzamos un error para saltar al catch.
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    // Si es correcto, devolvemos la Promesa del parseo JSON para el siguiente then.
    return response.json();
  })
  // Paso 3: ya tenemos el cuerpo parseado como objeto/array JS.
  .then(function (data) {
    // Algunos endpoints devuelven el array en 'results'; otros, el propio JSON es el array.
    var resultados = Array.isArray(data) ? data : data && data.results;

    // Paso 4: validamos que sea un array con elementos.
    if (!esListaDeTareasValida(resultados)) {
      throw new Error('Lista de tareas vacía o inválida');
    }

    // Persistimos el estado global para uso posterior en la app.
    tasks = resultados;

    // Paso 5: mostrando en consola en formato tabla para mejor legibilidad.
    console.table(tasks);
  })
  // Manejo unificado de errores: red, HTTP no OK, JSON inválido o validación fallida.
  .catch(function (error) {
    console.error('Error al obtener tareas:', error);
  });