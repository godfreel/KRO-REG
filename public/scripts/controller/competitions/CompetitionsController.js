define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.controller('CompetitionsController', 
	[
	 	'$scope',
	 	'$location',
	 	'$http',
	 	'UserService',

	 	function($scope, $location, $http, UserService){
	 		
	 		$scope.competitions = [];

	 		

		 	$scope.init = function()	{
		 		$http({
                        method: 'GET', 
                        url: 'competitions?start=0&count=2'
                    })
                    .success(function(data)  {
                        $scope.competitions = data;
                    })
                    .error(function(data)  {
                        console.log(data);
                    });
		 	}

		 	$scope.viewDetail = function (cmp) {
		 		$location.path('/competition/' + cmp._id);
		 	}

		 	$scope.isAdmin = function() {
				return UserService.isAdmin();
		 	}

	 		$scope.init();
	 	}
	]);
});