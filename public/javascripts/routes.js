weatherApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'homeController',
        templateUrl: 'pages/home.html'
    })
    .when('/forecast', {
        controller: 'forecastController',
        templateUrl: 'pages/forecast.html'
    })
    .when('/forecast/:cnt', {
        controller: 'forecastController',
        templateUrl: 'pages/forecast.html'
    });
});
