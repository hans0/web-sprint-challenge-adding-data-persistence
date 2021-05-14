// build your `/api/resources` router here
const express = require('express')

const resourcesModel = require('./model');

const router = express.Router();


router.get('/', (req, res, next) => {
  resourcesModel.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(next);
});


// TODO: ROUTER POST
router.post('/', (req, res, next) => {
  resourcesModel.addResource(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(next);
});

module.exports = router;