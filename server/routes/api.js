const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

//router.use('/posts', require('./postsRouter'));

router.use('/todos', require('./todos'));

module.exports = router;
