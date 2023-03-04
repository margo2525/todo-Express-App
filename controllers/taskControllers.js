const { Todo } = require('./../models');

module.exports.getTasks = (req, res) => {
  const tasks = Todo.getTasks();
  res.status(200).send(tasks);
};

module.exports.getTasksById = (req, res) => {
  const { id } = req.params;
  const foundTasks = Todo.getTasksById(id);
};

module.exports.createTask = (req, res) => {
  const { body } = req;
  const newTask = Todo.createTask(body);
  res.status(201).send(newTask);
};
