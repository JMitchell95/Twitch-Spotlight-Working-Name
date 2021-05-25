const router = require("express").Router();
const userRoutes = require("./user");


// router.use("/posts", postRoutes);example of indexing all of our routes
//API ROUTE FOR LOGIN
//API ROUTE FOR SAVED CATEGORIES 
router.use("/user", userRoutes);


module.exports = router;