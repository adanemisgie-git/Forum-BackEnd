const router = require('express').Router();
const auth = require('../middleware/auth');
const {
  createUser,
  getUsers,
  geUserById,
  login,
} = require('./user.controller');

router.post("/", createUser);
router.get("/all", getUsers);
router.get("/",auth, geUserById);
router.post("/login", login);

module.exports = router;
