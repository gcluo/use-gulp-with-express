var express = require('express');
var router = express.Router();
var service = require('../service/userService');

/* get方式跳转到用户登录页面 */
router.get('/login',function(req,res,next){
	res.render('login',{title:'用户登录'})
});

router.post('/doLogin',function(req,res,next){
	// console.log(req.body.username + req.body.password);
	console.log('in doLogin');
	var flag = service.checkUser(req.body.username,req.body.password,req);
	if(flag){
		console.log("go home");
		res.redirect('home');
	}else{
		console.log("go login");
		res.redirect('login');
	}
});

router.get('/home',function(req,res,next){
	res.render('home', { title: 'Home'});
});

module.exports = router;
