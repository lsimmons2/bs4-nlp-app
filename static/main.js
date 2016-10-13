angular.module('App', [])
.controller('MainController', function($scope, $http){
  $scope.submitText = function(){
    if($scope.form.$valid){
      var data = {
        text: $scope.text,
        apis: {
          rosette: $scope.rosette,
          aylien: $scope.aylien,
          bitext: $scope.bitext
        }
      }
      $http.post('/page', data)
      .then(function(resp){
        console.log('success resp: ', resp);
      }, function(resp){
        console.log('fail resp: ', resp);
      })
    }
  }
})
