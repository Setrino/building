var express = require('express');
var router = express.Router();
var port    =   process.env.PORT || 8080;

router.get('/', function(req, res){
    console.log(req.cookies.lang);
   res.setLocale(req.cookies.lang);
   res.render('index',{
       //Pour envoyer un message directement à notre bureau.
       supplies: ['mop', 'broom', 'duster'],
       sendMessage: res.__('Message'),
       home: res.__('Home'),
       office: res.__('Office'),
       building: res.__('Building'),
       accounting: res.__('Accounting'),
       law: res.__('Law'),
       administration: res.__('Administration'),
       gallery: res.__('Gallery'),
       philantropy: res.__('Philantropy'),
       contact: res.__('Contact')
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
