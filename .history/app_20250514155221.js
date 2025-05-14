const newTask = () => {
    overlay.classList.add("active");
    createTask.classList.add("active");
}

const closeModal = () => {
    overlay.classList.remove("active");
    createTask.classList.remove("active");
}

const searchTasks = () => {
    fetch("http://localhost:3000/tarefas")
    .then(res => res.json())
    .then(res => {

    })
}

const insertTask = (tasksList) => {
    if (tasksList.length > 0) {
        
    }
}