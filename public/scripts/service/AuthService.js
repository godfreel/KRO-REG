define(['appModule'], function(KRO_REG)
{
    KRO_REG.lazy.service('AuthService', 
    [
        '$http', 
        '$rootScope', 
        '$location',


        function($http, $rootScope, $location){

            var accessLevels = routingConfig.accessLevels
                , userRoles = routingConfig.userRoles
                , currentUser = localStorage.getItem('securityModel') || { username: '', role: userRoles.public };

            localStorage.removeItem('securityModel');

            function changeUser(user) {
                extend(currentUser, user);
            };

            function extend(obj) {
                each(slice.call(arguments, 1), function(source) {
                    if (source) {
                        for (var prop in source) {
                          obj[prop] = source[prop];
                        }
                    }
                });
                return obj;
            };

            return {
                authorize: function(accessLevel, role) {
                    if(role === undefined)
                        role = currentUser.role;
                        
                    return accessLevel.bitMask & role.bitMask;
                },
                isLoggedIn: function(user) {
                    if(user === undefined) user = currentUser;
                    return user.role.title === userRoles.employee.title || user.role.title === userRoles.admin.title;
                },
                register: function(user, success, error) {
                    $http.post('/register', user).success(function(res) {
                        changeUser(res);
                        success();
                    }).error(error);
                },
                login: function(user) {

                    var role = routingConfig.userRoles[user.role];
                    var securityModel = {};
                    securityModel.role = role;
                    localStorage.setItem('securityModel', securityModel);
                    currentUser = securityModel;
                },
                logout: function(callback) {
                    localStorage.removeItem('securityModel');
                    currentUser = { username: '', role: userRoles.public };
                    callback();
                },
                accessLevels: accessLevels,
                userRoles: userRoles,
                user: currentUser
            };
        }
    ]);
});