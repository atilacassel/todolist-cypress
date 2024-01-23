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

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            li.remove();
        });

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.addEventListener('change', function () {
            // Adicione lógica para marcar/desmarcar a tarefa como concluída.
            if (checkBox.checked) {
                taskContent.classList.add('completed');
            } else {
                taskContent.classList.remove('completed');
            }
        });

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        li.appendChild(checkBox);
        li.appendChild(taskContent);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});
