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

    document.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('edit')) {
            const listItem = target.parentElement;
            const taskText = listItem.querySelector('span');
            const editInput = listItem.querySelector('.editTask');
            const isEditing = listItem.classList.contains('editing');

            if (isEditing) {
                taskText.textContent = editInput.value;
            } else {
                editInput.value = taskText.textContent;
            }

            listItem.classList.toggle('editing');
            editInput.style.display = isEditing ? 'none' : 'block';
            taskText.style.display = isEditing ? 'block' : 'none';
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

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');

        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.classList.add('editTask');

        li.appendChild(checkBox);
        li.appendChild(span);
        li.appendChild(editInput);
        li.appendChild(deleteButton);
        li.appendChild(editButton);

        taskList.appendChild(li);
    }
});
