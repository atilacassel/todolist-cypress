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
            alert('Please enter a name for the task.');
        }
        
    });

    function addTask(taskText) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            li.remove();
        });
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});
