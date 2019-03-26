/*
'index.js'
 COMP308-W2019-Assignment2 (MEANPortfolio)
 Student Name: Heeyeong Kim
 Student Number: 300954759
 Date: 03/30/2019
*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET Home page. */
router.get('/', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
