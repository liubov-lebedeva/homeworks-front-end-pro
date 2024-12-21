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
    const bodyRes = await response.json();
    return bodyRes.isSuccess;
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
})