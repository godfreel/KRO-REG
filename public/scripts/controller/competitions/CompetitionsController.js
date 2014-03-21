define(['appModule'], function(KRO_REG)
{
	KRO_REG.lazy.controller('CompetitionsController', 
	[
	 	'$scope',
	 	'l10n',
	 	'$location',
	 	'$http',

	 	function($scope, l10n, $location, $http){
	 		
	 		$scope.competitions = [];

	 		

		 	$scope.init = function()	{
		 		$http({
                        method: 'GET', 
                        url: 'competitions?start=0&count=2'
                    })
                    .success(function(data)  {
                    	console.table(data);
                        $scope.competitions = data;
                    })
                    .error(function(data)  {
                        console.log(data);
                    });
		 	}

	 		$scope.init();
	 	}
	]);
});