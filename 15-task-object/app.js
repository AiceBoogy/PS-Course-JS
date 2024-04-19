const ToDoList = {
  tasks: [
    {
      title: "Помыть посуду",
      id: 1,
      priority: 1,
    },
  ],
  addTask: function (title, id, priority) {
    this.tasks.push({
      title: title,
      id: id,
      priority: priority,
    });
  },
  deletTask: function (id) {
    const itemToDelet = this.tasks.findIndex((item) => {
      return item.id === id;
    });
    if (itemToDelet != -1) {
      this.tasks.splice(itemToDelet, 1);
    } else {
      console.log("Нет задачи с таким id");
    }
  },
  newTaskName: function (id, name) {
    const changeName = this.tasks.findIndex((item) => {
      return item.id === id;
    });
    if (changeName != -1) {
      this.tasks[changeName].title = name;
    } else {
      console.log("Нет задачи с таким id");
    }
  },
  prioritySort: function () {
    this.tasks.sort((a, b) => b.priority - a.priority);
  },
};

ToDoList.addTask("Вынести мусор", 2, 2);
ToDoList.addTask("Пропылесосить", 5, 3);
ToDoList.deletTask(5);
ToDoList.newTaskName(2, "Выгулять собаку");
ToDoList.prioritySort();
console.log(ToDoList.tasks);
