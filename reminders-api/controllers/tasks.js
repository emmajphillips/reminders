const Task = require("../models/task");

async function tasksIndex(req, res) {
  try {
    let tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).json(err);
  }
}

async function taskCreate(req, res) {
  try {
    let createdTask = await Task.create(req.body);
    res.status(201).json(createdTask);
  } catch (err) {
    res.status(422).json(err);
  }
}

async function taskShow(req, res) {
  let taskId = req.params.id;
  try {
    let task = await Task.findById(taskId);
    if (!task) throw new Error();
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json(err);
  }
}

async function taskUpdate(req, res) {
  let taskId = req.params.id;
  try {
    let updatedTask = await Task.findByIdAndUpdate(taskId, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(202).json(updatedTask);
  } catch (err) {
    res.status(422).json(err);
  }
}

async function taskDelete(req, res) {
  let taskId = req.params.id;
  try {
    await Task.findByIdAndDelete(taskId);
    res.status(202).json({ message: "Task deleted" });
  } catch (err) {
    res.json(err);
  }
}

module.exports = {
  index: tasksIndex,
  create: taskCreate,
  show: taskShow,
  update: taskUpdate,
  delete: taskDelete,
};
