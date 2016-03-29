weatherApp.controller('homeController', ['$scope', 'svcWeatherData', '$location',  function($scope, svcWeatherData, $location) {
    
    $scope.city = svcWeatherData.city;
    
    $scope.$watch('city', function() {
        svcWeatherData.city = $scope.city;
    })
    
    $scope.submit = function() {
        $location.path('/forecast/3');
    }
    
}]);

weatherApp.controller('forecastController', ['$scope', 'svcWeatherData', 'weatherService', '$routeParams', '$location', function($scope, svcWeatherData, weatherService, $routeParams, $location) {
    
    $scope.city = svcWeatherData.city;
    $scope.days = $routeParams.cnt || '3';

    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);
    
    $scope.convertToFahrenhite = function(degK) {
        return Math.round((1.8 * (degK - 273.15)) + 32);
    };
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    };
    
    $('span a').removeAttr('class').each(function(n, i) {
        console.log(i);
        console.log(n);
        var item = $(i);
        if (item.attr('href') == '#' + $location.url()) {
            item.addClass('bg-primary');
        }
    });
    console.log($location.url());
    
}]);
