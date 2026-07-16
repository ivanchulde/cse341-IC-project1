const router = require('express').Router();
// Idex Page
// #swagger.tags = ['Index']
// #swagger.description = 'Index page'
router.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = router;