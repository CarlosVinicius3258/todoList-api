const router = require("express").Router();

const todosControllers = require("../controllers/TodosController");

router.get("/todos", todosControllers.index);
router.post("/todos", todosControllers.create);
router.put("/todos/:id", todosControllers.update);
router.delete("/todos/:id", todosControllers.delete);

module.exports = router;
