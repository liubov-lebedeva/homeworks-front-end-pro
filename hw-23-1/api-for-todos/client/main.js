const getTodos = async () => {
    const response = await fetch("http://localhost:8080/api/todos");
    return await response.json();
}

const addTodo = async (text) => {
    const response = await fetch("http://localhost:8080/api/todos", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            text: text
        })
    });
    return await response.json();
}

const deleteTodo = async (id) => {
    const response = await fetch(`http://localhost:8080/api/todos/${id}`, {
        method: "DELETE"
    })
    return await response.json();
}

const updateTodo = async (id, text, isCompleted) => {
    const response = await fetch(`http://localhost:8080/api/todos/${id}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            text: text,
            isCompleted: isCompleted
        })
    })
    return await response.json();
}


document.querySelector('#get').addEventListener('click', async () => {
    const todos = await getTodos();
    console.log(todos);
});

document.querySelector('#add').addEventListener('click', async () => {
    const placeholder = document.querySelector('#todo-text');
    const text = placeholder.value;
    if (!text) {
        return;
    }
    placeholder.value = '';
    const newTodo = await addTodo(text);
    console.log(newTodo);
});

document.querySelector('#delete').addEventListener('click', async () => {
    const placeholder = document.querySelector('#delete-id');
    const id = placeholder.value;
    if (!id) {
        return;
    }
    placeholder.value = '';
    const isSuccess = await deleteTodo(id);
    console.log("Is deleted?", isSuccess);
});

document.querySelector('#change').addEventListener('click', async () => {
    const idPlaceholder = document.querySelector('#change-todo-id');
    const textPlaceholder = document.querySelector('#change-todo');
    const status = document.querySelector('#status');
    const id = idPlaceholder.value;
    const text = textPlaceholder.value;
    const isCompleted = status.checked;
    if (!id) {
        return;
    }
    idPlaceholder.value = '';
    textPlaceholder.value = '';
    status.checked = false;
    const changedTodo = await updateTodo(id, text, isCompleted);
    console.log(changedTodo);
})