const { v4: uuidv4 } = require('uuid');
const exspress = require('express');

const { taskControllers } = require('./controllers');
const { validate } = require('./middleware');

const app = exspress();

app.use(exspress.json());

app.get('/tasks', taskControllers.getTasks);
app.get('/tasks/:id', taskControllers.getTasksById);
app.post('/tasks', validate.validateTaskOnCreate, taskControllers.createTask);
app.patch(
  '/tasks/:id',
  validate.validateTaskOnUpdate,
  taskControllers.updateTasks
);
app.delete('/tasks/:id', taskControllers.removeTask);

module.exports = app;
