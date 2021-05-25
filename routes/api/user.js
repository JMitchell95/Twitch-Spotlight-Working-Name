const router = require("express").Router();
const controller = require("../../controllers/controller");

router
  .route("/")
  .get(controller.findAll)
  .post(controller.create);


router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update);

module.exports = router;