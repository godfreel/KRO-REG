define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.service('UserService', 
	[
	 	function(){
	 		
	 		var Pub = {},
	 			user;

	 		Pub.isLoggined = function() {
 				if(this.user) {
 					return true;
 				}
 				return false;
 			}
 			Pub.setUser = function(user, callback) {
 				this.user = user;
 				callback();
 			};
 			Pub.getUser = function() {
 				return user;
 			};

 			Pub.isAdmin = function()	{
 				console.log(user);
 				return user ? user.role === 'admin' : true;
 			}

	 		return Pub;
	 	}
	]);
});