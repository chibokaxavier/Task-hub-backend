const Task = require("../models/Tasks");
const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `Task with ${taskID} not found` });
    } else {
      res.status(200).json({ task });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
const updateTask = (req, res) => {
  res.send("update Task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};
module.exports = {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
