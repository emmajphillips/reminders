const Task = require("../models/task");

async function tasksIndex(req, res) {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).json(err);
  }
}

async function taskCreate(req, res) {
  try {
    const createdTask = await Task.create(req.body);
    res.status(201).json(createdTask);
  } catch (err) {
    res.status(422).json(err);
  }
}

module.exports = {
  index: tasksIndex,
  create: taskCreate,
};
