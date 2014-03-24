define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.service('UserService', 
	[
	 	function(){
	 		
	 		var user;
	 		
	 		return {
	 			isLoggined : function() {
	 				if(user) {
	 					return true;
	 				}
	 				return false;
	 			},
	 			setUser : function(user, callback) {
	 				user = user;
	 				callback();
	 			}
	 		};		
	 	}
	]);
});