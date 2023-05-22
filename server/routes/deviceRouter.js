const express = require('express');
const router = express.Router();
const deviceController = require("../controllers/deviceController");

router.post('/',deviceController.create);
router.get('/',deviceController.getAll);
router.get('/:id');

module.exports=router;