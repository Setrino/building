var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.render('index',{
       title: 'Main',
       supplies: ['mop', 'broom', 'duster']
   });
});

router.get('404', function(req, res){
   res.render('header', {
       main_text: 'NA, Testing'
   })
});

module.exports = router;
