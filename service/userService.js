var dao = require("../dao/userDao");
var userService = {};
userService.findUserById = function (id){
	return "jim";
}

userService.checkUser = function (username,password,req){
	console.log('in userService');
	var user = dao.findUserByName(username);
	console.log(user);
	if(user && user.password === password){
		req.session.user = user;
		return true;
	}else{
		req.session.err = '用户名或密码错误';
		return false;
	}
}

module.exports = userService;