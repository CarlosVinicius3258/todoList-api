const router = require("express").Router();

const todosControllers = require("../controllers/TodosController");

router.get("/todos", todosControllers.index);
router.post("/todos", todosControllers.create);

module.exports = router;
