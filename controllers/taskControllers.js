const { Todo } = require('./../models');

module.exports.getTasks = (req, res) => {
  const { page = 1, results = 5 } = req.query;
  const tasks = Todo.getTasks(page, results);
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
module.exports.updateTasks = (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  const updateTask = Todo.updateTask(id, body);

  if (updateTask !== null) {
    return res.status(200).send(updateTask);
  }

  res.status(404).send('Task Not Found');
};

module.exports.removeTask = (req, res) => {
  const { id } = req.params;
  const removeTask = Todo.removeTask(id);

  if (removeTask) {
    return res.status(204).end();
  }
  res.status(404).send('Task Not Found');
};
