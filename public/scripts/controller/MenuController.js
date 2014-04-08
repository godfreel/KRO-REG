define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.controller('MenuController', 
	[
	 	'$scope',
	 	'$location',
	 	'AuthService',
	 	'UserService',
	 	'AlertService',

	 	function($scope, $location, AuthService, UserService, AlertService){

	 		$scope.competitionURL = function () {
	 			$location.path('/competitions');
	 		}

	 		$scope.isLoggined = function()	{
	 			return UserService.isLoggined();
	 		}

	 		$scope.showProfile = function()	{
	 			$location.path('/profile');
	 		}

	 		$scope.logout = function()	{
	 			UserService.setUser(undefined);
	 		}

	 		$scope.getLogin = function()	{
	 			return UserService.getUser().login;
	 		}

	 		$scope.login = function()	{
	 			if(!isValidCreds()) {
	 				AlertService.show({
	 					title: 'Ошибка',
	 					text: "неверные данные", 
	 					type: 'error'
	 				});
	 				return;
	 			}
	 			LoginController.login();
	 		}

	 		isValidCreds = function() {
	 			
	 			var login = $("#inputEmail").val();
	 			if(!isEmail(login))	{
	 				return false;
	 			}
	 			return true;
	 		}

	 		isEmail = function(email) {
				var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				return regex.test(email);
			}
	 	}
	]);
});