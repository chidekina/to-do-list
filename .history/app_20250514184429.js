const openModal = () => {
  overlay.classList.add("active");
  createTask.classList.add("active");
};

const closeModal = () => {
  overlay.classList.remove("active");
  createTask.classList.remove("active");
};

const getTasks = () => {
  fetch("http://localhost:3000/tarefas")
    .then((res) => res.json())
    .then((res) => {
      insertTask(res);
    });
};

getTasks();

const insertTask = (tasksList) => {
  if (tasksList.length > 0) {
    listOfTasks.innerHTML = "";
    tasksList.map((task) => {
      listOfTasks.innerHTML += `      
      <li>
        <h5>${task.title}</h5>
        <p>${task.description}</p>
        <div class="actions">
          <img src="/assets/trash-alt.png" alt="Icone de um lixo" onclick="deleteTask(${task.id})" >
        </div>
    </li>
          `;
    });
  }
};

const newTask = () => {
  event.preventDefault();
  let task = {
    title: title.value,
    description: description.value,
  };
  fetch("http://localhost:3000/tarefas", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then((res) => res.json())
    .then((res) => {
      closeModal();
      getTasks();
    });
};

const deleteTask = (id) => {
  fetch(`http://localhost:3000/tarefas/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => {
      alert("Tarefa deletada com sucesso");
      getTasks();
    });
};

const searchTasks = () => {
  const lis = document.querySelectorAll("ul li");
  if (searchBar.value.length > 0) {
    lis.forEach(li => {
         li.textContent.includes(searchBar.value)
         
       })
     
  }
};
