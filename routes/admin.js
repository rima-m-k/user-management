const express = require("express");
const router = express.Router();
const login = require("../controller/admin/login")
const home = require("../controller/admin/home")
const userDetails = require("../controller/admin/userDetails")
const deleteuser = require("../controller/admin/deleteuser")
const editUser = require("../controller/admin/editUser")
const addUser = require("../controller/admin/addUser")

router.post('/',login)
router.get('/home',home)
router.get('/userDetails', userDetails)
router.delete('/deleteuser/:id',deleteuser)
router.post('/edituser',editUser)
router.post('/addUser', addUser)




module.exports = router