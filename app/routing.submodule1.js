routing.$inject = ['$stateProvider'];

var lazyLoader = ['$ocLazyLoad', '$q', function( $oc, $q ){
        var defer = $q.defer();

        import('../modules/submodule1/index.js').then( ( name ) => {
            $oc.load({
                name: name
            });

            defer.resolve();
        });

        return defer.promise;
    }];

function routing( $stateProvider ) {
    $stateProvider
        .state('submodule1', {
            url: '^/submodule',
            views: {
                header: {
                    template: '<core-header></core-header>'
                },
                main: {
                    template: '<submodule1-welcome></submodule1-welcome>'
                },
                footer: {
                    template: '<core-footer></core-footer>'
                }
            },
            resolve: {
                _: lazyLoader
            }
        });
}

module.exports = routing;
