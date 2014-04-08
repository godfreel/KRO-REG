define(['appModule'], function(KRO_REG)
{
    KRO_REG.lazy.controller('TestController',
    [
        '$scope',
        '$location',
        'AuthService',
        '$http',
        'UserService',

        function($scope, $location, AuthService, $http, UserService) {
	
			$scope.login = function()    {
                $scope.user.login = $("#inputEmail").val();
                $scope.user.password = $("#inputPassword").val();

                console.log($scope.user);                

                $http({
                        method: "POST",
                        data: $scope.user,
                        url: "login"
                    })
                    .success(function(data)  {
                        console.log(data);
                        UserService.setUser(data.data, function()    {
                            $location.path("/competitions");
                        });
                    })
                    .error(function(data)  {
                        console.error(data);
                    });
               
            };

            $scope.logout = function()  {
                
            }

            $scope.reset = function()   {
                $scope.user = {};
            };

		}
    ]);
});