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
    .then((res) => {});
};

const insertTask = (tasksList) => {
  if (tasksList.length > 0) {
    listOfTasks.innerHTML = "";
    tasksList.map((task) => {
      `      
      <li>
        <h5>Titulo</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nulla odit veniam ullam, consequatur quisquam nihil, nemo, suscipit at exercitationem quis obcaecati. Dolorem iure fugiat reiciendis sunt, a maxime possimus.</p>
        <div class="actions"><img src="/assets/trash-alt.png" alt="Icone de um lixo"></div>
    </li>
          `;
    });
  }
};
