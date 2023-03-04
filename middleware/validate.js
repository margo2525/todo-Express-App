const {
  TASK_CREATION_VALIDATION_SCHEMA,
  TASK_UPDATING_VALIDATION_SCHEMA
} = require('../utils/validationSchemas');

module.exports.validateTaskOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    const validateTask = await TASK_CREATION_VALIDATION_SCHEMA.validate(body);
    req.body = validateTask;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports.validateTaskOnUpdate = async (req, res, next) => {
  const { body } = req;

  try {
    const validateTask = await TASK_UPDATING_VALIDATION_SCHEMA.validate(body);
    req.body = validateTask;
    next();
  } catch (err) {
    next(err);
  }
};
