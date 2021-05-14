// const path = require('path');
const db = require('../models')

module.exports = (app) => {
  app.get('/api/workouts', (req,res) => {
    db.Workout.find({}, (err, workouts) => {
    // .then(data => {res.json(data)})
    // .catch(err => {
    //   console.log(err)
    //   res.json(err)
    if (err) {
      console.log(err);
    } else {
      res.json(workouts)
    };
    })
  });

  app.post('/api/workouts', (req,res) => {
    db.Workout.create({})
    .then(data => res.json(data))
    .catch(err => {
      res.json(err)
    })
  });

  app.put('/api/workouts/:id', ({body, params} ,res) => {
    // db.Workout.findOneAndUpdate(
      // {_id: params.id}
    // )
    let id = params.id;
    console.log(id);
  })
};