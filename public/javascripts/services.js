weatherApp.service('svcWeatherData', function() {
    this.city = 'New York, NY';
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.getWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=cdc3eb1482ebce5f8b4a27eec419707a", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}} );

        return weatherAPI.get({q: city, cnt: days});
    }
}]);