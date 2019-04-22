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
        res.render('about');
      });

      app.get("/contact", function (req, res) {
        res.locals.metaTags = {
          title: "TDWeb.Dev",
          description: "Full Stack Web Developer in Austin, Texas",
          keywords: "web design austin texas"
        };
        res.render('contact', {heading: "Contact Me For More Information"});
      });

      app.get("/portfolio", function (req, res) {
        res.locals.metaTags = {
          title: "TDWeb.Dev",
          description: "Full Stack Web Developer in Austin, Texas",
          keywords: "web design austin texas"
        };
        res.render('portfolio');
      });

      app.get("/resources", function (req, res) {
        res.locals.metaTags = {
          title: "TDWeb.Dev",
          description: "Full Stack Web Developer in Austin, Texas",
          keywords: "web design austin texas"
        };
        res.render('resources');
      });

      app.get("/services", function (req, res) {
        res.locals.metaTags = {
          title: "TDWeb.Dev",
          description: "Full Stack Web Developer in Austin, Texas",
          keywords: "web design austin texas"
        };
        res.render('services');
      });

      app.use(function(req,res){
        res.status(404);
        res.render('404');
    });
  };