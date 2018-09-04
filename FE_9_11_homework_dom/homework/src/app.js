const $ = (selector, selectAll = false) =>
	!selectAll ? document.querySelector(selector) : document.querySelectorAll(selector);


const createElement = (tag, attributes = {}, innerTEXT = '') => {
	const element = document.createElement(tag);

	if (Object.keys(attributes).length) {
		for (let key in attributes) {
			if (attributes.hasOwnProperty(key)) {
				element.setAttribute(key, attributes[key]);
			}
		}
	}

	if (innerTEXT) {
		element.appendChild(document.createTextNode(innerTEXT));
	}

	return element;
};

let itemCounter = 0;
const MAX_LIST_ITEMS = 10;

const maxItemMsg = $('.cat-todo-list-max-msg');
const inputField = $('.cat-todo-list-new-input');
const addNewItemBtn = $('.cat-todo-list-add-new-btn');
const todoList = $('.cat-todo-list-list');

inputField.onchange = inputField.onkeyup = event => {
	const labelText = inputField.value.trim();

	addNewItemBtn.disabled = !labelText;

	if (event.code === 'Enter' && labelText) {
		addItem(labelText);
	}
};

addNewItemBtn.onclick = () => {
	addItem(inputField.value.trim());
};

const addItem = labelText => {
	const checkIcon = createElement('i', {
		'class': 'material-icons'
	}, 'check_box_outline_blank');
	const deleteIcon = createElement('i', {
		'class': 'material-icons'
	}, 'delete');
	const label = createElement('span', {}, labelText);
	const checkboxBtn = createElement('button', {
		'class': 'cat-todo-list-checkbox'
	});
	const deleteBtn = createElement('button', {
		'class': 'cat-todo-list-remove-item'
	});
	const liItem = createElement('li', {
		'class': 'cat-todo-list-list-item',
		'draggable': true
	});

	checkboxBtn.appendChild(checkIcon);
	checkboxBtn.appendChild(label);
	deleteBtn.appendChild(deleteIcon);
	liItem.appendChild(checkboxBtn);
	liItem.appendChild(deleteBtn);
	todoList.appendChild(liItem);

	checkboxBtn.onclick = () => {
		checkIcon.textContent = 'check_box';
	};

	deleteBtn.onclick = () => {
		liItem.remove();
		itemCounter--;

		inputField.disabled = false;
		maxItemMsg.style.display = 'none';
	};

	if (++itemCounter >= MAX_LIST_ITEMS) {
		inputField.disabled = true;
		maxItemMsg.style.display = 'block';
	}

	inputField.value = '';
	addNewItemBtn.disabled = true;
};
