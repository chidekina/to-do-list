const newTask = () => {
  overlay.classList.add("active");
  createTask.classList.add("active");
};

const closeModal = () => {
  overlay.classList.remove("active");
  createTask.classList.remove("active");
};

const searchTasks = () => {
  fetch("http://localhost:3000/tarefas")
    .then((res) => res.json())
    .then((res) => {
        
    });
};

insertTask();

const insertTask = (tasksList) => {
  if (tasksList.length > 0) {
    listOfTasks.innerHTML = "";
    tasksList.map((task) => {
      `      
      <li>
        <h5>${task.title}</h5>
        <p>${task.description}</p>
        <div class="actions"><img src="/assets/trash-alt.png" alt="Icone de um lixo"></div>
    </li>
          `;
    });
  }
};
