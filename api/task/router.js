// build your `/api/tasks` router here
const express = require('express');

const tasksModel = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  tasksModel.getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

module.exports = router;