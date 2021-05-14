// build your `/api/projects` router here
const express = require('express');

const projectsModel = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  projectsModel.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(next);
})


// TODO: PROJECT POST

module.exports = router;