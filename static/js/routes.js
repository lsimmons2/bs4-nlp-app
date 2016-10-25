angular.module('routes', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'static/partials/home.html'
    })
    .when('/apis', {
      templateUrl: 'static/partials/apiSearch.html',
      controller: 'ApiSearchController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
