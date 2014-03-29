define(['appRoutes','service/lazyDependencyResolver'], function(config, lazyDependencyResolver)
{

    KRO_REG = angular.module('KRO_REG', ['ngCookies', 'ngRoute']);

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

            $routeProvider.otherwise({redirectTo: '/competitions'});
        }
    ]);

    return KRO_REG;
});
