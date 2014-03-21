define([], function()
{

    var access = routingConfig.accessLevels;

    return {
        defaultRoutePath: '/',

        defaultDependencies: [
            'l10n',
            'directive/bool',
            'directive/draggable',
            'directive/multiSelect',
            'service/AlertService',
            'service/AuthService',
            'service/WaitDialogService',
            'controller/MenuController'
        ],

        routes: {
            '/competitions': {
                templateUrl: 'views/competitions.html',
                dependencies: [
                    'controller/Competitions/CompetitionsController',
                    'controller/Competitions/CompetitionsURLController'
                ],
                access: access.anon
            },
            '/login': {
                templateUrl: 'login.html',
                dependencies: [
                    'controller/LoginController',
                ],
                access: access.anon
            },
            '/profile': {
                templateUrl : 'views/profile.html',
                dependencies: [
                    'controller/ProfileController'
                ],
                access: access.user
            }
        }
    };
});