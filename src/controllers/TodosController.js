const Todo = require("../models/Todo");
//TODO: create update method
//TODO: create delete method
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
    const todoFound = await this.dao.findById(id, "descr checked");
    const foundChecked = todoFound.checked;
    const todo = await this.dao.findByIdAndUpdate(
      id,
      {
        checked: !foundChecked,
      },
      { new: true }
    );
    return res.json(todo);
  };

  delete = async (req, res) => {
    const { id } = req.params;
    const todo = await this.dao.deleteOne({ _id: id });
    return res.json(todo);
  };
}

module.exports = new TodosController(Todo);
