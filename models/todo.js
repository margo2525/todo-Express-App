const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');
module.exports.Todo = require('./todo');
const todoDB = [
  {
    id: 0,
    task: 'task1',
    isDone: false,
    createdAt: format(new Date(), 'Y-MM-dd'),
  },
  {
    id: 1,
    task: 'Task2',
    isDone: false,
    createdAt: format(new Date(), 'Y-MM-dd'),
  },
];

class TodoDB {
  constructor (arr) {
    this.tasks = [...arr];
  }

  createTask (newTask) {
    this.tasks.push({
      ...newTask,
      id: uuidv4(),
      isDone: false,
      createdAt: format(new Date(), 'Y-MM-dd'),
    });
    return this.tasks[this.tasks.length - 1];
  }

  getTasks () {
    return [...this.tasks];
  }

  getTasksById (id) {
    const foundIndex = this.tasks.findIndex(t => t.id === Number(id));
    return foundIndex === -1 ? null : this.tasks[foundIndex];
  }

  updateTask (id, values) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === Number(id));
    this.tasks[foundTaskIndex] = {
      ...this.tasks[foundTaskIndex],
      ...values,
    };
    return foundTaskIndex === -1 ? null : this.tasks[foundTaskIndex];
  }

  removeTask (id) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === Number(id));

    return foundTaskIndex === -1 ? null : this.tasks.splice(foundTaskIndex, 1);
  }
}

const todoTaskDbInstace = new TodoDB(todoDB);

module.exports = todoTaskDbInstace;
