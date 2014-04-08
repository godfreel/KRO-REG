define([], function()
{

    var access = routingConfig.accessLevels;

    return {
        defaultRoutePath: '/',

        defaultDependencies: [
            'controller/TestController',
            'directive/bool',
            'directive/draggable',
            'directive/multiSelect',
            'service/AlertService',
            'service/AuthService',
            'service/WaitDialogService',
            'service/UserService',
            'controller/LoginController',
            'controller/MenuController'
        ],

        routes: {
            '/competitions': {
                templateUrl: 'views/competitions.html',
                dependencies: [
                    'controller/LoginController',
                    'controller/competitions/CompetitionsController',
                    'controller/competitions/CompetitionsURLController'
                ],
                access: access.anon
            },
            '/competition/:id': {
                templateUrl: 'views/competitions/detail.html',
                dependencies: [
                    'controller/LoginController',
                    'controller/competitions/CompetitionsController',
                    'controller/competitions/CompetitionsURLController',
                    'controller/competitions/DetailController'
                ],
                access: access.anon
            },
            '/profile': {
                templateUrl : 'views/profile.html',
                dependencies: [
                    'controller/LoginController',
                    'controller/ProfileController'
                ],
                access: access.user
            }
        }
    };
});