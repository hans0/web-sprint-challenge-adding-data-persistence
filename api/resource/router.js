// build your `/api/resources` router here
const express = require('express')

const router = express.Router();


router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'hey',
  })
})


module.exports = router;