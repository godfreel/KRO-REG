define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.controller('DetailController', 
	[
	 	'$scope',
	 	'$location',
	 	'$http',
	 	'UserService',
	 	'$route', 
	 	'$routeParams',

	 	function($scope, $location, $http, UserService, $route, $routeParams){
	 		
	 		$scope.cmp = {};

	 		$scope.init = function(id)	{
	 			$http({
	 				method: 'GET',
	 				url: '/competition?cmpid=' + id
	 			})
	 			.success(function(data)	{
	 				if(!data.success) {
	 					$location.path('/competitions');
	 				}

	 				$scope.cmp = data.data;
	 			});
	 		}

	 		$scope.init($routeParams.id);

	 	}
	]);
});