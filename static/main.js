angular.module('App', [])
.controller('MainController', function($scope, $http){
  $scope.submitUrl = function(){
    if($scope.urlForm.$valid){
      $http.post('/page', $scope.url)
      .then(function(resp){
        console.log('success resp: ', resp);
      }, function(resp){
        console.log('fail resp: ', resp);
      })
    }
  }
})
