const Project = require('../models/projects');
const mongoose = require('mongoose');
module.exports = function (app) {
    // Load index page
    app.get("/", function (req, res) {
      res.locals.metaTags = {
        title: "TDWeb.Dev",
        description: "Full Stack Web Developer in Austin, Texas",
        keywords: "web design austin texas"
      };
      res.render('index', {heading: "Full Stack Web Designer & Developer"});
    });

    app.get("/about", function (req, res) {
        res.locals.metaTags = {
          title: "TDWeb.Dev",
          description: "Full Stack Web Developer in Austin, Texas",
          keywords: "web design austin texas"
        };
        res.render('about', {heading: "All About Me"});
      });

      app.get("/contact", function (req, res) {
        res.locals.metaTags = {
          title: "TDWeb.Dev",
          description: "Full Stack Web Developer in Austin, Texas",
          keywords: "web design austin texas"
        };
        res.render('contact', {heading: "Questions or Comments?"});
      });

      app.get("/portfolio", function (req, res) {
        res.locals.metaTags = {
          title: "TDWeb.Dev",
          description: "Full Stack Web Developer in Austin, Texas",
          keywords: "web design austin texas"
        };
        Project.find({}, (err, projects) => {
          res.render('portfolio', {projects});
          console.log("response of: " + projects);
        });
        
      });

      app.get("/resources", function (req, res) {
        res.locals.metaTags = {
          title: "TDWeb.Dev",
          description: "Full Stack Web Developer in Austin, Texas",
          keywords: "web design austin texas"
        };
        res.render('resources', {heading: "Curated Collection of Resources"});
      });

      app.get("/services", function (req, res) {
        res.locals.metaTags = {
          title: "TDWeb.Dev",
          description: "Full Stack Web Developer in Austin, Texas",
          keywords: "web design austin texas"
        };
        res.render('services', {heading: "Hourly and Flat Rate Freelance Work"});
      });

      app.use(function(req,res){
        res.status(404);
        res.render('404');
    });
  };