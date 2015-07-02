// var db = require('../util/util');
var userDao = {};

userDao.findUserByName = function(userName){
	// var collection = db.collection('user');
	// var user = collection.findOne({'username':userName}, function(err, item) {
	// 	assert.equal(err, null);
	// 	console.log(item);
	// 	return item;
	// });
	// return user;
	console.log('in userdao');
	return {'username':'admin','password':'admin'};
}

module.exports = userDao;