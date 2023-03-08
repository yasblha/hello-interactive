router.post('/', async (req, res) => {
    const task = new Task(req.body);
    try {
      await task.save();
      res.status(201).send(task);
    } catch (err) {
      res.status(400).send(err);
    }
  });