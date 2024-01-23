document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value;

        if (taskText.trim() !== '') {
            addTask(taskText);
            taskInput.value = '';
        } else {
            alert('Please enter a task name.');
        }
    });

    function addTask(taskText) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.addEventListener('change', function () {
            if (checkBox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        const span = document.createElement('span');
        span.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            li.remove();
        });

        li.appendChild(checkBox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});
