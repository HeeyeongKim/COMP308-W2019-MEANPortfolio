/*
'index.js'
 COMP308-W2019-Assignment2 (MEANPortfolio)
 Student Name: Heeyeong Kim
 Student Number: 300954759
 Date: 03/30/2019
*/

let express = require('express');

module.exports.displayHomePage = (req, res, next) => {
  res.render('index', { title: 'Home' });
}

module.exports.displayAboutPage = (req, res, next) => {
  res.render('about/index', { title: 'About' });
}

module.exports.displayProjectsPage = (req, res, next) => {
  res.render('projects/index', { title: 'Projects' });
}

module.exports.displayServicesPage = (req, res, next) => {
  res.render('services/index', { title: 'Services' });
}

module.exports.displayContactPage = (req, res, next) => {
  res.render('contact/index', { title: 'Contact' });
}
