const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const datasss = require('../models/datas');

//home 
router.get('/', function(req, res, next){
    res.render('home')
});
//welcome




router.get('/welcome', function(req, res, next){
  res.render('welcome', {output: req.params.id})
});
router.post('/welcome/submit', function(req,res,next){
  var id = req.body.id;
  res.redirect('/welcome/' );
});


// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard')
   
 
);
//insert
router.get('/insert', function(req, res, next){
    res.render('insert', {user: req.user, title: 'aaaaa'}
     )
  });
  
  
  
  router.post('/insert', function(req, res, next){
    let errors = [];
  
    var item={
      code: req.body.code,
      da1: req.body.da1,
      task: req.body.task,
     
  
      
  
  
    };
    if (!item.code|| !item.da1 || !item.task) {
      errors.push({ msg: 'Please enter all fields' });
    }
    if (errors.length > 0) {
      res.redirect('/insert');
    } else {
          const data = new datasss(item);
          data
            .save()
              .then(user => {
                  req.flash(
                    'success_msg',
                    'task inserted successfully...'
                  );
                  res.redirect('/insert');
                })
                .catch(err => console.log(err));
        }
      });
      
      router.get('/dashboard', function(req, res, next){
        res.render('dashboard', {output: req.params.id})
      });
      router.post('/dashboard/submit', function(req,res,next){
        var id = req.body.id;
        res.redirect('/dashboard/' );
      });
      
  

      router.get('/find', function(req, res, next){
        res.render('find', {user: req.user, title: 'aaaaa'});
        
      });
      
      router.post('/find', function(req, res, next){
        res.redirect('/find');
        var code = req.body.code;
        
      
       
        
      
      
      });
      router.get('/dashboard', function(req, res, next){
        res.render('dashboard', {output: req.params.id})
      });
      router.post('/dashboard/submit', function(req,res,next){
        var id = req.body.id;
        res.redirect('/dashboard/' );
      });
      
      
      
      router.get('/get-data/:code', function(req, res, next){
        var zzz = req.params.code;
        console.log(zzz)
      
      
        console.log('yes were in')
      
      
        
        var resultarray = [];
        datasss.find({code: zzz}, function(err, doc){
          if (err){
            res.send(err)
          } else {
            res.render('get', {
              items: doc
            })
          }
        });
        
      });






module.exports = router;