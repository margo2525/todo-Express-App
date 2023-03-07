const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');

const todoDB = [
  {
    id: 0,
    task: 'test',
    isDone: false,
    createdAt: format(new Date(), 'Y-MM-dd'),
  },
  {
    id: 1,
    task: 'Task2',
    isDone: false,
    createdAt: format(new Date(), 'Y-MM-dd'),
  },
  {
    id: 2,
    task: 'task3',
    isDone: false,
    createdAt: format(new Date(), 'Y-MM-dd'),
  },
  {
    id: 3,
    task: 'Task4',
    isDone: false,
    createdAt: format(new Date(), 'Y-MM-dd'),
  },
  {
    id: 4,
    task: 'task5',
    isDone: false,
    createdAt: format(new Date(), 'Y-MM-dd'),
  },
  {
    id: 5,
    task: 'Task6',
    isDone: false,
    createdAt: format(new Date(), 'Y-MM-dd'),
  },

  {
    id: 6,
    task: 'task7',
    isDone: false,
    createdAt: format(new Date(), 'Y-MM-dd'),
  },
  {
    id: 7,
    task: 'Task8',
    isDone: false,
    createdAt: format(new Date(), 'Y-MM-dd'),
  },
  {
    id: 8,
    task: 'task9',
    isDone: false,
    createdAt: format(new Date(), 'Y-MM-dd'),
  },
  {
    id: 9,
    task: 'Task10',
    isDone: false,
    createdAt: format(new Date(), 'Y-MM-dd'),
  },
  {
    id: 10,
    task: 'task11',
    isDone: false,
    createdAt: format(new Date(), 'Y-MM-dd'),
  },
  {
    id: 11,
    task: 'Task12',
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

  getTasks (page, results) {
    return [...this.tasks.slice((page - 1) * results, page * results)];
  }
  getTasksById (id) {
    const foundIndex = this.tasks.findIndex(t => t.id === id);
    return foundIndex === -1 ? null : this.tasks[foundIndex];
  }

  updateTask (id, values) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === id);
    this.tasks[foundTaskIndex] = {
      ...this.tasks[foundTaskIndex],
      ...values,
    };
    return foundTaskIndex === -1 ? null : this.tasks[foundTaskIndex];
  }

  removeTask (id) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === id);

    return foundTaskIndex === -1 ? null : this.tasks.splice(foundTaskIndex, 1);
  }
}

const todoTaskDbInstace = new TodoDB(todoDB);

module.exports = todoTaskDbInstace;
