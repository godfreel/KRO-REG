define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.controller('MenuController', 
	[
	 	'$scope',
	 	'l10n',
	 	'$location',
	 	'AuthService',
	 	'UserService',

	 	function($scope, l10n, $location, AuthService, UserService){

	 		$scope.changeLocal = function(local) {
	 			l10n.changeLocal(local);
	 			$scope.$parent.changeLanguage();
	 		};

	 		$scope.competitionURL = function () {
	 			$location.path('/competitions');
	 		}

	 		$scope.isLoggined = function()	{
	 			console.log(UserService.getUser());
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