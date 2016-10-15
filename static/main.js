angular.module('App', [])
.controller('MainController', function($scope, $http){

  $scope.text = 'the owls are not what they seem'

  $scope.submitAylien = function(){
    if($scope.form.$valid){
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
  }

  $scope.submitBitext = function(){
    if($scope.form.$valid){
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
  }

  $scope.submitRosette = function(){
    if($scope.form.$valid){
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
  }

  $scope.submit = function(){

  }

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
