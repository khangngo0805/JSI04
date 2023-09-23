let todos = [
    {
        id: 1,
        title: "delectus aut autem",
        completed: false,
    },
    {
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
    },
    {
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
    },
    {
        id: 4,
        title: "et porro tempora",
        completed: true,
    },
    {
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false,
    },
];

const listContainer = document.getElementById('list-container');
const inputBox = document.getElementById('input-box');
const addBtn = document.getElementById('add-btn');

const renderTodoList = () => {
    listContainer.innerHTML = "";
    todos.forEach((todo) => {
        const liElm = document.createElement('li');
        liElm.innerHTML = todo.title;
        const spanElm = document.createElement('span');
        spanElm.textContent = '×';
        spanElm.addEventListener('click', () => handleDeleteTodo(todo.id))
        liElm.appendChild(spanElm);
        listContainer.appendChild(liElm);
    })
}


const handleAddTodo = () => {
    todos.push({
        id: Math.floor(Math.random() * 10000),
        title: inputBox.value,
        completed: false,
    })
    console.log(todos)
    renderTodoList();
    inputBox.value = "";
}

const handleDeleteTodo = (deleteId) => {
    todos = todos.filter((todo) => todo.id !== deleteId);
    renderTodoList();
};
addBtn.addEventListener('click', handleAddTodo);
renderTodoList();