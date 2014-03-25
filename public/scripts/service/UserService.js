define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.service('UserService', 
	[
	 	function(){
	 		
	 		var user;

	 		return {
	 			isLoggined : function() {
	 				if(this.user) {
	 					return true;
	 				}
	 				return false;
	 			},
	 			setUser : function(user, callback) {
	 				this.user = user;
	 				console.log(this);
	 				callback();
	 			},
	 			getUser : function() {
	 				return user;
	 			}
	 		};		
	 	}
	]);
});