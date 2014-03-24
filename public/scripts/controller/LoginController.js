define(['appModule'], function(KRO_REG)
{
    KRO_REG.lazy.controller('LoginController',
    [
        '$scope',
        'l10n', 
        '$location',
        'AuthService',
        '$rootScope',
        'UserService',

        function($scope, l10n, $location, AuthService, $rootScope, UserService) {
	
			$scope.login = function()    {
                $scope.user.login = $("#logininput").val();
                if(!$scope.user.password) $scope.user.password = $("#passwordinput").val();

                UserService.setUser($scope.user, function()    {
                    $location.path("/competitions");
                });
            };

            $scope.reset = function()   {
                $scope.user = {};
            };

		}
    ]);
});