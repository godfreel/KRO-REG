define(['appModule'], function(KRO_REG)
{
    KRO_REG.lazy.controller('LoginController',
    [
        '$scope',
        'l10n', 
        '$location',
        'AuthService',
        '$http',
        'UserService',

        function($scope, l10n, $location, AuthService, $http, UserService) {
	
			$scope.login = function()    {
                $scope.user.login = $("#logininput").val();
                if(!$scope.user.password) $scope.user.password = $("#passwordinput").val();

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