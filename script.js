document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', addTask);
    todoList.addEventListener('click', manageTask);

    function addTask(e) {
        e.preventDefault();
        const taskText = todoInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="complete">Complete</button>
                <button class="edit">Edit</button>
                <button class="delete">Remove</button>
            `;
            todoList.appendChild(li);
            todoInput.value = '';
        }
    }

    function manageTask(e) {
        if (e.target.classList.contains('delete')) {
            deleteTask(e);
        } else if (e.target.classList.contains('complete')) {
            completeTask(e);
        } else if (e.target.classList.contains('edit')) {
            editTask(e);
        }
    }

    function deleteTask(e) {
        const task = e.target.parentElement;
        todoList.removeChild(task);
    }

    function completeTask(e) {
        const task = e.target.parentElement;
        task.classList.toggle('completed');
    }

    function editTask(e) {
        const task = e.target.parentElement;
        const taskText = task.querySelector('span').innerText;
        todoInput.value = taskText;
        todoList.removeChild(task);
    }
});