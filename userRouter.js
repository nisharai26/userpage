const { Router } = require("express");
const router = Router();
const controller = require("../controllers/userController");
router.get("/", controller.getIndex);
router.post("/", controller.createUser);

router.get("/profile", controller.getProfile);
router.get("/login", controller.getLogin);
router.post("/login", controller.checkUser);
router.get("/protected-route",controller.checkUserSession,controller.protectedRoute);
router.get("/logOut", controller.logOut);
module.exports = router;
