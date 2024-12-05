const form = document.querySelector(".js--form");
const input = document.querySelector(".js--form__input");
const todosWrapper = document.querySelector(".js--todos-wrapper");

let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
let serialNumber = +localStorage.getItem("serialNumber") || 0;

function initializeTodos() {
    savedTodos.forEach(todo => {
        addTodoToDOM(todo.id, todo.text, todo.completed);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText) {
        const id = createId();
        addTodoToDOM(id, taskText, false);
        saveToLocalStorage(id, taskText, false);
        input.value = "";
    }
});


const createId = () => {
    serialNumber++;
    localStorage.setItem("serialNumber", serialNumber.toString());
    return serialNumber;
}


function saveToLocalStorage(id, text, completed) {
    savedTodos.push({id, text, completed});
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    localStorage.setItem("serialNumber", serialNumber.toString());
}


function addTodoToDOM(id, text, completed) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.dataset.id = id;
    li.dataset.text = text;
    li.innerHTML = `
        <input type="checkbox" class="todo-checkbox" ${completed ? "checked" : ""}>
        <button class="todo-item__delete">Delete</button>
        <span class="todo-text">${text}</span>
        <button class="btn btn-info btn-sm ms-2 show-details-btn" data-bs-toggle="modal" data-bs-target="#taskModal">Details</button>
    `;
    todosWrapper.appendChild(li);

    li.querySelector(".show-details-btn").addEventListener("click", () => {
        showTaskText(text);
    });

    li.querySelector(".todo-item__delete").addEventListener("click", () => {
        deleteFromLocalStorage(id, li);
    });

    li.querySelector(".todo-checkbox").addEventListener("change", (e) => {
        const completed = e.target.checked;
        updateLocalStorage(id, completed);
    });
}


function showTaskText(text) {
    document.getElementById("taskText").innerText = text;
}


function updateLocalStorage(id, completed) {
    const todoIndex = savedTodos.findIndex(todo => todo.id === id);
    savedTodos[todoIndex].completed = completed;
    localStorage.setItem("todos", JSON.stringify(savedTodos));
}

function deleteFromLocalStorage(id, li) {
    todosWrapper.removeChild(li);
    savedTodos = savedTodos.filter(todo => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
}


initializeTodos();