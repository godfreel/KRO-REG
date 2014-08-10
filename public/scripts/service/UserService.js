define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.service('UserService', 
	[
		'$rootScope',

	 	function($rootScope){
	 		
	 		$rootScope.user = {};

	 		isLoggined = function() {
 				if($rootScope.user) {
 					return true;
 				}
 				return false;
 			}
 			
 			setUser = function(user, callback) {
 				$rootScope.user = user;
 				callback ? callback() : false;
 			};
 			
 			getUser = function() {
 				return $rootScope.user;
 			};

 			isAdmin = function()	{
 				return $rootScope.user ? $rootScope.user.role === 'admin' : true;
 			}

	 		return {
	 			isLoggined: isLoggined,
	 			setUser: setUser,
	 			getUser: getUser,
	 			isAdmin: isAdmin
	 		};
	 	}
	]);
});