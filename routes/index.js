var express = require('express');
var router = express.Router();
var port    =   process.env.PORT || 8080;

router.get('/', function(req, res){
   res.setLocale(req.cookies.lang);
   res.render('index',{
       title: res.__('AAAA'),
       supplies: ['mop', 'broom', 'duster']
   });
});

router.get('/index', function(req, res){
    res.cookie('lang', req.query.lang, { maxAge: 900000, httpOnly: true });
    res.send('done');
});

router.get('404', function(req, res){
   res.render('header', {
       main_text: 'NA, Testing'
   })
});

module.exports = router;
