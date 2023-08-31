const express = require('express');

// router
const router = express.Router();

// multer
const multer = require('multer');

// homeController
const homeController = require('../controllers/home_controller');

// CSV Controller
const csvController = require('../controllers/csv_controller');

// Upload using multer
const upload = multer({ dest : 'uploads'});

// home router
router.get('/' , homeController.home);

// csv view router
router.get('/csv/:id' , csvController.view);

// upload csv file router
router.post('/upload' , upload.single('csv') , csvController.upload);

// export the router
module.exports = router;