define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.controller('MenuController', 
	[
	 	'$scope',
	 	'l10n',
	 	'$location',
	 	'AuthService',

	 	function($scope, l10n, $location, AuthService){
	 		
	 		$scope.changeLocal = function(local) {
	 			l10n.changeLocal(local);
	 			$scope.$parent.changeLanguage();
	 		};

	 		$scope.competitionURL = function () {
	 			$location.path('/competitions');
	 		}
	 	}
	]);
});