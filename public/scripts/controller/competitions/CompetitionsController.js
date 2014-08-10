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

	 		$scope.page = 1;
		    $scope.pageSize = 5;
	 		$scope.maxSize = 5;
	 		$scope.totalItems = 0;

		 	$scope.init = function()	{

		 		$http({
		 			method: 'GET', 
                    url: 'cmpCount'
		 		})
		 		.success(function(data)	{
		 			$scope.totalItems = data.count;
		 		});

		 		$scope.getCompetitions();
		 	}

		 	$scope.getCompetitions = function() {
		 		$scope.competitions = [];
		 		$http({
                    method: 'GET', 
                    url: 'competitions?start=' + ($scope.page - 1) * $scope.pageSize + '&count=' + $scope.pageSize
                })
                .success(function(data)  {
                    $scope.competitions = data;
                });
		 	}

		 	$scope.viewDetail = function (cmp) {
		 		$location.path('/competition/' + cmp._id);
		 	}

		 	$scope.isAdmin = function() {
				return UserService.isAdmin();
		 	}

		 	$scope.isPaginationRendered = function() {
				return ($scope.totalItems > $scope.pageSize);
			};
			
			$scope.hasNoData = function() {
				return ($scope.totalItems === 0);
			};

			$scope.selectPage = function(page) {
				$scope.page = page;
				$scope.getCompetitions();
			}

	 		$scope.init();
	 	}
	]);
});