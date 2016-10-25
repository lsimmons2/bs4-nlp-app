angular.module('App', [
  'routes',
  'apiSearchController'
])
.config(function($interpolateProvider){
  $interpolateProvider.startSymbol('//').endSymbol('//');
});
