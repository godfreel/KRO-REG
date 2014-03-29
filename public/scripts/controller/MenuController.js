define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.controller('MenuController', 
	[
	 	'$scope',
	 	'$location',
	 	'AuthService',
	 	'UserService',

	 	function($scope, $location, AuthService, UserService){

	 		$scope.changeLocal = function(local) {
	 			l10n.changeLocal(local);
	 			$scope.$parent.changeLanguage();
	 		};

	 		$scope.competitionURL = function () {
	 			$location.path('/competitions');
	 		}

	 		$scope.isLoggined = function()	{
	 			return UserService.isLoggined();
	 		}

	 		$scope.redirectToLogin = function()	{
	 			$location.path('/login');
	 		}

	 		$scope.logout = function()	{
	 			UserService.setUser(undefined);
	 		}
	 	}
	]);
});