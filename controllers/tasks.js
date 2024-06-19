const getAllTask = (req, res) => {
  res.send("get tasks");
};
const createTask = (req, res) => {
  res.json(req.body);
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
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
