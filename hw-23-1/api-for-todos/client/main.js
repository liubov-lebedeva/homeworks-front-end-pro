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


document.querySelector('#get').addEventListener('click', async () => {
    const todos = await getTodos();
    console.log(todos);
});

document.querySelector('#add').addEventListener('click', async () => {
    const text = document.querySelector('#todo-text').value;
    if (!text) {
        return;
    }
    const newTodo = await addTodo(text);
    console.log(newTodo);
});