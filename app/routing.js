routing.$inject = ['$stateProvider','$urlRouterProvider'];

function routing( $stateProvider, $urlRouterProvider ) {
    $stateProvider
        .state('welcome', {
            url: '^/',
            views: {
                header: {
                    template: '<core-header></core-header>'
                },
                main: {
                    template: '<core-welcome></core-welcome>'
                },
                footer: {
                    template: '<core-footer></core-footer>'
                }
            }
        });

    $urlRouterProvider.otherwise('/');
}

module.exports = routing;
