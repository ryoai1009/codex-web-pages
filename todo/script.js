const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const timeInput = document.getElementById("timeInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");
const clearDoneButton = document.getElementById("clearDoneButton");

let tasks = JSON.parse(localStorage.getItem("codexTodoTasks")) || [];

function saveTasks() {
  localStorage.setItem("codexTodoTasks", JSON.stringify(tasks));
}

function formatDueDate(task) {
  if (!task.date) {
    return "期限なし";
  }

  const timeText = task.time ? ` ${task.time}` : "";
  return `期限：${task.date}${timeText}`;
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = task.done ? "task-item done" : "task-item";

    item.innerHTML = `
      <input class="task-check" type="checkbox" ${task.done ? "checked" : ""} aria-label="完了にする">
      <div>
        <p class="task-title"></p>
        <p class="task-meta">${formatDueDate(task)}</p>
      </div>
      <div class="task-actions">
        <button class="mini-button calendar-button" type="button">カレンダーに追加</button>
        <button class="danger-button delete-button" type="button">削除</button>
      </div>
    `;

    item.querySelector(".task-title").textContent = task.title;
    item.querySelector(".task-check").addEventListener("change", () => toggleTask(task.id));
    item.querySelector(".delete-button").addEventListener("click", () => deleteTask(task.id));
    item.querySelector(".calendar-button").addEventListener("click", () => downloadCalendarFile(task));

    taskList.appendChild(item);
  });

  taskCount.textContent = `${tasks.length}件のタスク`;
  emptyMessage.style.display = tasks.length === 0 ? "block" : "none";
}

function addTask(title, date, time) {
  tasks.push({
    id: Date.now(),
    title,
    date,
    time,
    done: false
  });

  saveTasks();
  renderTasks();

  if (date) {
    alert("タスクを追加しました。期限が近づいたら、このページを開いて確認してください。");
  } else {
    alert("タスクを追加しました。");
  }
}

function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, done: !task.done };
    }

    return task;
  });

  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

function clearDoneTasks() {
  tasks = tasks.filter((task) => !task.done);
  saveTasks();
  renderTasks();
}

function downloadCalendarFile(task) {
  if (!task.date) {
    alert("カレンダーに追加するには、期限日を入れてください。");
    return;
  }

  const startDate = new Date(`${task.date}T${task.time || "09:00"}`);
  const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);
  const startText = toCalendarDate(startDate);
  const endText = toCalendarDate(endDate);
  const safeFileName = task.title.replace(/[\\/:*?"<>|]/g, "_");
  const calendarText = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `SUMMARY:${task.title}`,
    `DTSTART:${startText}`,
    `DTEND:${endText}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\n");

  const file = new Blob([calendarText], { type: "text/calendar" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = `${safeFileName}.ics`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function toCalendarDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  return `${year}${month}${day}T${hour}${minute}00`;
}

function checkAlerts() {
  const now = new Date();

  tasks.forEach((task) => {
    if (!task.date || task.done || task.alertShown) {
      return;
    }

    const dueText = `${task.date}T${task.time || "09:00"}`;
    const dueDate = new Date(dueText);

    if (now >= dueDate) {
      alert(`お知らせ：${task.title} の時間です。`);
      task.alertShown = true;
      saveTasks();
    }
  });
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  addTask(taskInput.value.trim(), dateInput.value, timeInput.value);
  taskForm.reset();
  taskInput.focus();
});

clearDoneButton.addEventListener("click", clearDoneTasks);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

renderTasks();
checkAlerts();
setInterval(checkAlerts, 60000);
