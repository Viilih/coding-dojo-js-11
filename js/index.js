const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/g;
const reminderList = document.getElementById('reminder-list');
const addTasks = document.querySelector('.add-reminder');
const hidden = document.getElementById('hidden');
const date = new Date();
let tasks = [];

addTasks.addEventListener('click', el => {
	console.log('cliquei');
	el.preventDefault();
	let taskHour;
	while (!regex.test(taskHour)) {
		taskHour = prompt('Digite a hora escolhida! (hh:mm)');
	}
	const taskMessage = prompt('Digite sua mensagem: ');

	const task = {
		message: taskMessage,
		hour: taskHour,
	};

	tasks.push(task);
	ordernarTasks(tasks);
	console.log(tasks);
});

function ordernarTasks() {
	reminderList.innerHTML = '';
	let tasksOrdenadas = tasks.sort((t1, t2) => {
		return t1.hour.localeCompare(t2.hour);
	});
	tasksOrdenadas.forEach(task => {
		const createItem = document.createElement('li');
		createItem.classList.add('reminder-item');

		createItem.innerHTML = `
 		<div>${task.message}</div>
 	 	<div class = "hora">${task.hour}</div>
		 `;
		reminderList.appendChild(createItem);
	});
	createItem.classList.add(`date-${date.getFullYear()}${date.getMonth()}`);
}

function updateDate() {
	const data = document.getElementById('display-date');
	data.innerHTML = `${date.toLocaleDateString('pt-BR', {
		month: 'short',
		year: 'numeric',
	})}`;
}

updateDate();

function addMonthInDate() {
	date.setMonth(date.getMonth() + 1);
	updateDate();
}

function minusMonthInDate() {
	date.setMonth(date.getMonth() - 1);
	updateDate();
}
