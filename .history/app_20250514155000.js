const newTask = () => {
    overlay.classList.add("active");
    createTask.classList.add("active");
}

const closeModal = () => {
    overlay.classList.remove("active");
    createTask.classList.remove("active");
}

const searchTasks = () => {
    fetch("http://")
}