angular.module('App', [])
.controller('MainController', function($scope, $http){

  $scope.text = 'the owls are not what they seem';
  $scope.aylien = {};
  $scope.bitext = {};
  $scope.rosette = {};
  $scope.results = [];


  function submitAylien(){
      var data = {
        text: $scope.text,
        analysis: $scope.aylien
      }
      $http.post('/aylien', data)
        .then(function(resp){
          console.log('aylien success: ', resp);
          $scope.results.push(resp.data);
          console.log('$scope.results: ', $scope.results);
        })
        .catch(function(resp){
          console.log('aylien fail: ', resp);
        });
  };

  function submitBitext(){
      var data = {
        text: $scope.text,
        analysis: $scope.bitext
      }
      $http.post('/bitext', data)
        .then(function(resp){
          console.log('bitext success: ', resp);
          $scope.results.push(resp.data);
          console.log('$scope.results: ', $scope.results);
        })
        .catch(function(resp){
          console.log('bitext fail: ', resp);
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
          console.log('rosette success: ', resp);
          for(var key in resp.data){
            resp.data[key] = JSON.parse(resp.data[key]);
          }
          $scope.results.push(resp.data);
          console.log('$scope.results: ', $scope.results);
        })
        .catch(function(resp){
          console.log('rosette fail: ', resp);
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
.config(function($interpolateProvider){
  $interpolateProvider.startSymbol('//').endSymbol('//');
})
