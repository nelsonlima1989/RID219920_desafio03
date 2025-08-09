let countId = 0;
let tasks = [
    {
        id: `task-${++countId}`,
        task: "Implementar tela de listagem de tarefas",
        tag: "frontend",
        date: "21/08/2024",
        done: false
    },
    {
        id: `task-${++countId}`,
        task: "Criar endpoint para cadastro de tarefas",
        tag: "backend",
        date: "21/08/2024",
        done: false
    },
    {
        id: `task-${++countId}`,
        task: "Implementar protótipo da listagem de tarefas",
        tag: "backend",
        date: "21/08/2024",
        done: true
    }
];

const getTodayDate = () => new Date().toLocaleDateString('pt-BR');

const createTaskId = () => {
    countId++;
    return `task-${countId}`;
};

const resetForm = () => {
    document.getElementById('create-todo-form').reset();
    document.getElementById('input-box').focus();
};

const validateForm = (task, tag) => {
    if (!task || !tag) {
        alert('Preencha todos os campos');
        return false;
    }
    return true;
};

const markTaskAsDone = (taskObj) => {
    taskObj.done = true;
    renderTasks();
};

const createTaskHTML = (taskObj) => {
    const contentDiv = document.createElement('div');
    contentDiv.id = "content";

    const ul = document.createElement('ul');
    ul.id = "card";
    contentDiv.appendChild(ul);

    const liTitle = document.createElement('li');
    const titleH2 = document.createElement('h2');
    titleH2.textContent = taskObj.task;

    if (taskObj.done) {
        titleH2.style.color = '#8f98a8';
        titleH2.style.textDecoration = 'line-through';
    }

    liTitle.appendChild(titleH2);
    ul.appendChild(liTitle);

    const liTagDate = document.createElement('li');

    const tagDiv = document.createElement('div');
    tagDiv.id = "tag-marked";
    tagDiv.innerHTML = `<p>${taskObj.tag}</p>`;
    liTagDate.appendChild(tagDiv);

    const dateDiv = document.createElement('div');
    dateDiv.id = "task-date";
    dateDiv.textContent = `Criado em: ${taskObj.date}`;
    liTagDate.appendChild(dateDiv);

    ul.appendChild(liTagDate);

    const doneBtn = document.createElement('button');
    doneBtn.id = "done-btn";

    if (taskObj.done) {
        doneBtn.innerHTML = `<img src="./assets/checked.svg" alt="Concluído">`;
        doneBtn.style.background = '#fff';
        doneBtn.disabled = true;
    } else {
        doneBtn.textContent = "Concluir";
        doneBtn.addEventListener('click', () => {
            markTaskAsDone(taskObj);
        });
    }

    contentDiv.appendChild(doneBtn);

    return contentDiv;
};

const updateFooterCount = () => {
    const completedCount = tasks.filter(task => task.done).length;
    const footer = document.querySelector('footer');
    footer.textContent = `${completedCount} tarefa${completedCount !== 1 ? 's' : ''} concluída${completedCount !== 1 ? 's' : ''}`;
};

const renderTasks = () => {
    const container = document.getElementById('card-tasks');
    container.innerHTML = '';

    if (!tasks.length) {
        container.innerHTML = `<p id="p-container">Adicione uma tarefa</p>`;
    } else {
        tasks.forEach(taskObj => {
            const taskHTML = createTaskHTML(taskObj);
            container.appendChild(taskHTML);
        });
    }

    updateFooterCount();
};

const createNewTask = (event) => {
    event.preventDefault();

    const newTask = document.getElementById('input-box').value.trim();
    const newTag = document.getElementById('tag-box').value.trim();

    if (!validateForm(newTask, newTag)) return;

    const taskObj = {
        id: createTaskId(),
        task: newTask,
        tag: newTag,
        date: getTodayDate(),
        done: false
    };

    tasks.push(taskObj);
    renderTasks();
    resetForm();
};

window.onload = () => {
    document.getElementById('create-todo-form').addEventListener('submit', createNewTask);
    renderTasks();
};