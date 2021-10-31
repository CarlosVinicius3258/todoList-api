const Todo = require("../models/Todo");
class TodosController {
  constructor(dao) {
    this.dao = dao;
    this.index = this.index.bind(this);
  }

  async index(req, res) {
    console.log(this.dao);
    const todos = await this.dao.find();
    return res.json(todos);
  }

  create = async (req, res) => {
    const todo = await this.dao.create(req.body);
    return res.status(201).json(todo);
  };

  update = async (req, res) => {
    const { id } = req.params;
    console.log("id: ", id);
    const todoFound = await this.dao.findById(id, "descr checked");
    const foundChecked = todoFound.checked;
    const todo = await this.dao.findByIdAndUpdate(
      id,
      {
        checked: !foundChecked,
      },
      { new: true }
    );
    //console.log(todo);
    return res.json(todo);
  };

  delete = async (req, res) => {
    const { id } = req.params;
    console.log("id: ", id);
    await this.dao.deleteOne({ _id: id });
    return res.json(id);
  };
}

module.exports = new TodosController(Todo);
