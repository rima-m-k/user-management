const express = require("express");
const router = express.Router();
const {login,postlogin} = require("../controller/user/login")
const {signUp} = require('../controller/user/signUp')
const {profile,addImg} = require('../controller/user/profile')
const upload = require('../fileUploadHelper/addImage')

router.route("/").get(login).post(postlogin)
router.route('/signUp').post(signUp)
router.route('/home/profile').post(profile)
router.route('/addImg').post(upload.single("ProfileImg"),addImg) 


module.exports = router