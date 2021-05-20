const path = require('path');
// const router = require('express').Router();

module.exports = (app) => {
  app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

};
// module.exports = router;