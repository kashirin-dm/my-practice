/*
TO-DO List маленький проект для обучения на чистом JS
*/

// здесь первое поле ввода вместе с кнопкой для создание задач
var inputTask = document.getElementById('new-task');
var addButton = document.getElementById('add');
// а здесь 2 раздела с завершенными и не завершенными задачами
var unfinishedTasks = document.getElementById('unfinished-tasks');
var finishedTasks = document.getElementById('finished-tasks');

// метод создания одного элемента списка - задачи со значением и элементами
function createNewElement(task, finished) {
    var listItem = document.createElement('li');
    // кнопка чек-бокс
    var checkbox = document.createElement('button');
    checkbox.className = 'material-icons checkbox';
    if (finished) {
        checkbox.innerHTML = '<i class="material-icons">check_box</i>';
    } else {
        checkbox.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';
    }

    // лейбл с текстом задачи
    var label = document.createElement('label');
    label.innerText = task; // вставляем сам текст задачи

    // поле ввода задачи непосредственно внутри нее
    var input = document.createElement('input');
    input.type = 'text';

    // кнопка редактирования
    var editButton = document.createElement('button');
    editButton.className = 'material-icons edit';
    editButton.innerHTML = '<i class="material-icons">edit</i>';

    // кнопка удаление
    var deleteButton = document.createElement('button');
    deleteButton.className = 'material-icons delete';
    deleteButton.innerHTML = '<i class="material-icons">delete</i>';

    // добавляем все элементы в документ как дочки "li"
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(input);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);

    return listItem; // возвращаем результат функции со всеми действиями
}

// метод добавления новой задачи
function addTask() {
    if (inputTask.value) {// если введено значение
        // создаем элемент списка с этим значением
        var listItem = createNewElement(inputTask.value, false);
        unfinishedTasks.appendChild(listItem);
        bindTaskEvents(listItem, finishTask); // привязываем кнопочки внутри задачи
        inputTask.value = ''; //очищаем содержимое строки
    }
    save();
}

// создаем задачу при вводе в верхнее поле и нажатие кнопки "Добавить"
addButton.onclick = addTask;

// метод удаления задачи при нажатии на кнопку "удалить"
function deleteTask() {
    var listItem = this.parentNode; // помещаем в переменную родителя
    var ul = listItem.parentNode; // помещаем в перемнную родителя данной задачи
    ul.removeChild(listItem); //таким образом удалил эту конкретную задачу
    save();
}

// метод редактирования задачи, при нажатии на "карандашик"
function editTask() {
    var editButton = this; // через this образаем к самой кнопке
    var listItem = this.parentNode;
    var label = listItem.querySelector('label');
    var input = listItem.querySelector('input[type=text]');

    var containsClass = listItem.classList.contains('editMode');
    //узнаем, есть ли у li класс editMode
    if (containsClass) {
        label.innerText = input.value;
        editButton.className='material-icons edit';
        editButton.innerHTML = '<i class="material-icons">edit</i>';
        save();
    } else {
        input.value = label.innerText;
        editButton.className='material-icons save';
        editButton.innerHTML = '<i class="material-icons">save</i>';
    }

    listItem.classList.toggle('editMode');
    //переключаем классы включая или отключая редактирование
}


// метод чекбокса, чтобы выполнить задачу
function finishTask() {
    var listItem = this.parentNode;
    var checkbox = listItem.querySelector('button.checkbox');
    checkbox.className = 'material-icons checkbox';
    checkbox.innerHTML = '<i class="material-icons">check_box</i>';

    finishedTasks.appendChild(listItem);
    // перемещаем задачу в блока завершенных
    bindTaskEvents(listItem, unfinishTask);
    // передаем другому методу
    save();
}

// метод чекбокса, чтобы выполненную задачу перекинуть в невыполненные
function unfinishTask() {
    var listItem = this.parentNode;
    var checkbox = listItem.querySelector('button.checkbox');
    checkbox.className = 'material-icons checkbox';
    checkbox.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';

    unfinishedTasks.appendChild(listItem);
    // перемещаем задачу в блока текущих
    bindTaskEvents(listItem, finishTask);
    // передаем другому методу
    save();
}

// метод привязки событий к кнопкам
function bindTaskEvents(listItem, checkboxEvent) {
    var checkbox = listItem.querySelector('button.checkbox');
    var editButton = listItem.querySelector('button.edit');
    var deleteButton = listItem.querySelector('button.delete');

    checkbox.onclick = checkboxEvent;
    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
}

// сохранение в локальном хранилище
function save() {
    var unfinishedTasksArr = [];
    var finishedTasksArr = [];

    for (var i = 0; i < unfinishedTasks.children.length; i++) {
        unfinishedTasksArr.push(unfinishedTasks.children[i].getElementsByTagName('label')[0].innerText);
    }
    for (var i = 0; i < finishedTasks.children.length; i++) {
        finishedTasksArr.push(finishedTasks.children[i].getElementsByTagName('label')[0].innerText);
    }
    localStorage.removeItem('todo');
    localStorage.setItem('todo', JSON.stringify({
        unfinishedTasks: unfinishedTasksArr,
        finishedTasks: finishedTasksArr
    }));
}

function load() {
    return JSON.parse(localStorage.getItem('todo'));
}

var data = load();
for (var i = 0; i < data.unfinishedTasks.length; i++) {
    var listItem = createNewElement(data.unfinishedTasks[i], false);
    unfinishedTasks.appendChild(listItem);
    bindTaskEvents(listItem, finishTask);
}
for (var i = 0; i < data.finishedTasks.length; i++) {
    var listItem = createNewElement(data.finishedTasks[i], true);
    finishedTasks.appendChild(listItem);
    bindTaskEvents(listItem, unfinishTask);
}
