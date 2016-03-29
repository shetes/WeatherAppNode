weatherApp.directive('dayForecast', function() {
    return {
        templateUrl: '/directives/dayForecast.html',
        restrict: 'E',
        replace: true,
        scope: {
            dayCast: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
})