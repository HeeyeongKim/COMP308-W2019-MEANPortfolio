/*
 COMP308-W2019-Assignment2 (MEANPortfolio)
 Student Name: Heeyeong Kim
 Student Number: 300954759
 Date: 03/30/2019
*/

let express = require('express');
let router = express.Router();

/* GET Home Page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

/* GET About Page. */
router.get('/about', (req, res, next) => {
  res.render('about/index', { title: 'About' });
});

/* GET Contact Page. */
router.get('/contact', (req, res, next) => {
  res.render('contact/index', { title: 'Contact' });
});

/* GET Project Page. */
router.get('/projects', (req, res, next) => {
  res.render('projects/index', { title: 'Projects' });
});

/* GET Service Page. */
router.get('/services', (req, res, next) => {
  res.render('services/index', { title: 'Services' });
});

module.exports = router;
