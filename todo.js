const todoForm = document.getElementById("todo-form");
const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    inputBox.value = inputBox.value.trim();
    if (!inputBox.value) {
        inputBox.reportValidity();
        return;
    }

    const task = document.createElement("li");
    task.textContent = inputBox.value;
    taskList.appendChild(task);
    inputBox.value = "";
    inputBox.focus();
});