const yup = require('yup');

module.exports.TASK_CREATION_VALIDATION_SCHEMA = yup.object({
  task: yup.string().trim().min(2).max(120).required(),
});

module.exports.TASK_UPDATING_VALIDATION_SCHEMA = yup.object({
  task: yup.string().trim().min(2).max(120),
  isDone: yup.boolean(),
});
