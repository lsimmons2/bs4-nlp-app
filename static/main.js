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
          $scope.aylienError = false;
          for(var key in resp.data){
            resp.data[key] = JSON.parse(resp.data[key]);
          }
          $scope.results.push(resp.data);
        })
        .catch(function(resp){
          var error = {
            error: 'Aylien'
          };
          $scope.results.push(error);
        });
  };

  function submitBitext(){
      var data = {
        text: $scope.text,
        analysis: $scope.bitext
      }
      $http.post('/bitext', data)
        .then(function(resp){
          for(var key in resp.data){
            resp.data[key] = JSON.parse(resp.data[key]);
          }
          $scope.results.push(resp.data);
        })
        .catch(function(resp){
          var error = {
            error: 'Bitext'
          };
          $scope.results.push(error);
        })
  }

  function submitRosette(){
    var data = {
      text: $scope.text,
      analysis: $scope.rosette
    }
    $http.post('/rosette', data)
      .then(function(resp){
        $scope.rosetteError = false;
        for(var key in resp.data){
          resp.data[key] = JSON.parse(resp.data[key]);
        }
        $scope.results.push(resp.data);
      })
      .catch(function(resp){
        var error = {
          error: 'Rosette'
        };
        $scope.results.push(error);
      })
  }


  $scope.submit = function(){
    if($scope.aylienCheck && $scope.aylien.sentiment || $scope.aylienCheck && $scope.aylien.concepts || $scope.aylienCheck && $scope.aylien.classification){
      submitAylien();
    }
    if($scope.bitextCheck && $scope.bitext.sentiment || $scope.bitextCheck && $scope.bitext.concepts || $scope.bitextCheck && $scope.bitext.classification){
      submitBitext();
    }
    if($scope.rosetteCheck && $scope.rosette.sentiment || $scope.rosetteCheck && $scope.rosette.concepts || $scope.rosetteCheck && $scope.rosette.classification){
      submitRosette();
    }
  }

})
.config(function($interpolateProvider){
  $interpolateProvider.startSymbol('//').endSymbol('//');
})
