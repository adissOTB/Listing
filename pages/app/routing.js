angular.module('dataRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'app/views/home.html'
    })

    .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'dataCon',
        controllerAs: 'dot'
    })

    .when('/view', {
        templateUrl: 'app/views/view.html',
        controller: 'getCtrl',
        controllerAs: 'pull'
    })

    .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});