document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    let tasks = [];
    
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
            tasks.forEach(taskText => {
                createTaskElement(taskText);
            });
        }
    }
    
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');
        
        removeButton.onclick = function() {
            taskList.removeChild(li);
            
            const taskIndex = tasks.indexOf(taskText);
            if (taskIndex > -1) {
                tasks.splice(taskIndex, 1);
            }
            
            saveTasks();
        };
        
        li.appendChild(removeButton);
        taskList.appendChild(li);
    }
    
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        
        tasks.push(taskText);
        createTaskElement(taskText);
        saveTasks();
        taskInput.value = "";
    }
    
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    
    loadTasks();
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Additional DOMContentLoaded listener executed');
});