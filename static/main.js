angular.module('App', [])
.controller('MainController', function($scope, $http){

  $scope.text = 'the owls are not what they seem';
  $scope.aylien = {};
  $scope.bitext = {};
  $scope.rosette = {};

  function submitAylien(){
      var data = {
        text: $scope.text,
        analysis: $scope.aylien
      }
      $http.post('/aylien', data)
        .then(function(resp){
          console.log('success: ', resp);
        }, function(resp){
          console.log('fail: ', resp);
        })
  }

  function submitBitext(){
      var data = {
        text: $scope.text,
        analysis: $scope.bitext
      }
      $http.post('/bitext', data)
        .then(function(resp){
          console.log('success: ', resp);
        }, function(resp){
          console.log('fail: ', resp);
        })
  }

  function submitRosette(){
      var data = {
        text: $scope.text,
        analysis: $scope.rosette
      }
      console.log('data: ', data);
      $http.post('/rosette', data)
        .then(function(resp){
          console.log('success: ', resp);
        }, function(resp){
          console.log('fail: ', resp);
        })
  }

  $scope.submit = function(){
    if($scope.aylienCheck && $scope.aylien.sentiment || $scope.aylienCheck && $scope.aylien.concepts || $scope.aylienCheck && $scope.aylien.classification){
      console.log('submitAylien');
      submitAylien();
    }
    if($scope.bitextCheck && $scope.bitext.sentiment || $scope.bitextCheck && $scope.bitext.concepts || $scope.bitextCheck && $scope.bitext.classification){
      console.log('submitBitext');
      submitBitext();
    }
    if($scope.rosetteCheck && $scope.rosette.sentiment || $scope.rosetteCheck && $scope.rosette.concepts || $scope.rosetteCheck && $scope.rosette.classification){
      console.log('submitRosette');
      submitRosette();
    }
  }

})
