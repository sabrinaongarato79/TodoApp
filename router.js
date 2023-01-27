const router = require("express").Router();
const db = require("./models");
const entity = "Todos";

router.get("/", async (req, res) => {
  try {
    const todos = await db[entity].findAll();
    res.status(200).json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await db[entity].findOne({ where: { id } });
    res.status(200).json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { title, description, status } = req.body;

  try {
    await db[entity].create({ title, description, status });
    res.status(201).json({ message: "Tarea creada exitosamente." });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    await db[entity].update(
      { status },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json({ message: "Successfully updated" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await db[entity].destroy({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
