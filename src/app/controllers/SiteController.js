const Course = require('../models/Course');

class SiteController {
    
   index(req, res) {
      Course.find({}, (err, courses) => {
         if(!err) {
            res.json(courses);
         } else {
            res.status(400).json({error: 'Error !!!!!'});
         }
      });
   }

   search(req, res) {
      res.render('search');
   }
}

module.exports = new SiteController;