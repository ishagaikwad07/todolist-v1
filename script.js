document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const categorySelect = document.getElementById('categorySelect');
    const dueDate = document.getElementById('dueDate');

    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;
    const category = categorySelect.value;
    const due = dueDate.value;

    if (taskText === '') {
        alert('Task cannot be empty!');
        return;
    }

    const task = {
        text: taskText,
        priority: priority,
        category: category,
        dueDate: due,
        completed: false
    };

    saveTask(task);
    taskInput.value = '';
    renderTask(task);
}

function renderTask(task) {
    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.className = `task ${task.completed ? 'completed' : ''}`;

    li.innerHTML = `
        <span class="task-priority">${task.priority}</span>
        <span class="task-category">${task.category}</span>
        <span class="task-date">${task.dueDate}</span>
        <span>${task.text}</span>
        <div class="task-buttons">
            <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    const completeBtn = li.querySelector('.complete-btn');
    const deleteBtn = li.querySelector('.delete-btn');
    const editBtn = li.querySelector('.edit-btn');

    completeBtn.addEventListener('click', () => toggleComplete(task, li));
    deleteBtn.addEventListener('click', () => deleteTask(task, li));
    editBtn.addEventListener('click', () => editTask(task, li));

    taskList.appendChild(li);
}

function toggleComplete(task, li) {
    task.completed = !task.completed;
    li.classList.toggle('completed');
    updateTasksInStorage();
}

function deleteTask(task, li) {
    li.remove();
    deleteTaskFromStorage(task);
}

function editTask(task, li) {
    const taskInput = document.getElementById('taskInput');
    taskInput.value = task.text;
    deleteTask(task, li);
}

function saveTask(task) {
    let tasks = getTasksFromStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = getTasksFromStorage();
    tasks.forEach(renderTask);
}

function getTasksFromStorage() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function updateTasksInStorage() {
    const tasks = [];
    document.querySelectorAll('.task').forEach(li => {
        const text = li.querySelector('span:nth-child(4)').textContent;
        const priority = li.querySelector('.task-priority').textContent;
        const category = li.querySelector('.task-category').textContent;
        const dueDate = li.querySelector('.task-date').textContent;
        const completed = li.classList.contains('completed');
        tasks.push({ text, priority, category, dueDate, completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTaskFromStorage(task) {
    let tasks = getTasksFromStorage();
    tasks = tasks.filter(t => t.text !== task.text);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
