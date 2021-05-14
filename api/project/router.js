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
});

router.get('/:id', (req, res, next) => {
  projectsModel.getProjectById(req.params.id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(next);
});

// TODO: PROJECT POST
router.post('/', (req, res, next) => {
  projectsModel.addProject(req.body)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(next);
});

module.exports = router;