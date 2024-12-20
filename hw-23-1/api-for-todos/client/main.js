const getTodos = async () => {
    const response = await fetch("http://localhost:8080/api/todos");
    console.log(response.body);
}

getTodos();