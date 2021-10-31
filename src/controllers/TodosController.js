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
}

module.exports = new TodosController(Todo);
