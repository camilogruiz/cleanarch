const express = require('express');
const router = express.Router();

const {UserController} = require("../../application/controllers/user-controller");
const {UsersService} = require("../db/pg-users");

router.get('/', async function(req, res, next) {
  const uc = new UserController(new UsersService);
  const data = await uc.getAll()
  res.status(200).send(`Users: ${JSON.stringify(data)}`)
});

/* GET users listing. */
router.post('/', async function(req, res, next) {
    try{
        const { username, password } = req.body;
        const uc = new UserController(new UsersService);
        const data = await uc.adduser({ username, password })
        res.status(201).send(`User added with ID: ${data.userid}`)
    }
    catch (err) {
        res.status(500).send(`Error: ${err}`)
    }
});

module.exports = router;
