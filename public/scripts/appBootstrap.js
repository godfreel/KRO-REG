require.config({
    baseUrl: 'scripts',
    paths: {}
});

require
(
    [
        'appModule'
    ],
    function(KRO_REG)
    {
        angular.bootstrap(document, ['KRO_REG']);
    }
);