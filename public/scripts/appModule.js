define(['appRoutes','service/lazyDependencyResolver'], function(config, lazyDependencyResolver)
{

    KRO_REG = angular.module('KRO_REG', ['ui.calendar', 'ui.bootstrap', 'ngCookies', 'ngRoute']);

    KRO_REG.host = '127.0.0.1';
    
    KRO_REG.empl = {}; 

    KRO_REG.config(
    [
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        '$httpProvider',


        function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider)
        {
            KRO_REG.lazy = {};

            KRO_REG.lazy.controller = $controllerProvider.register;
            KRO_REG.lazy.directive  = $compileProvider.directive;
            KRO_REG.lazy.filter     = $filterProvider.register;
            KRO_REG.lazy.factory    = $provide.factory;
            KRO_REG.lazy.service    = $provide.service;

            angular.forEach(config.routes, function(route, path)
            {
                $routeProvider.when(
                    path, 
                    {
                        templateUrl:route.templateUrl, 
                        access:route.access, 
                        resolve:lazyDependencyResolver(config.defaultDependencies.concat(route.dependencies))
                    }
                )
            });

            $routeProvider.otherwise({redirectTo: '/login'});

            var interceptor = function($q, $location) {
                return {
                    'responseError': function(response) {
                        if(response.status === 401 || response.status === 403) {
                            $location.path('/login');
                            return $q.reject(response);
                        }
                        else {
                            return $q.reject(response);
                        }
                    }
                }
            };
            $httpProvider.interceptors.push(interceptor);
        }
    ]);

    KRO_REG.run(
        [
        '$rootScope',
        '$location',
        '$route',
        '$cookieStore',

        function($rootScope, $location, $route, $cookieStore)  {
            $rootScope.$on('$locationChangeStart', function(ev, next, current) {
                    var nextPath = $location.path();
                    var route = $route.routes[nextPath];

                    if(!route) {
                        return;
                    }

                    var access = route.access,
                    i,
                    securityModel = { username: '', role: 'public' };

                    var cookies = document.cookie.split(";");
                    for(i = 0; i<cookies.length; i++)   {
                        if(cookies[i].indexOf('securityModel') !== -1)  {
                            var c = cookies[i].substr(cookies[i].indexOf("=") + 1);
                            securityModel = JSON.parse(unescape(c));
                            break;
                        }
                    }

                    var isAllowed = access.bitMask & securityModel.role.bitMask;

                    if(nextPath.indexOf("login") === -1)    {
                        if(!isAllowed) {
                            $rootScope.error = "Access denied";
                            ev.preventDefault();
                        }
                    }                  
                  });
        }
    ]);

    return KRO_REG;
});
