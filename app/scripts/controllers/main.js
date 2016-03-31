'use strict';

/**
 * @ngdoc function
 * @name directorsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the directorsApp
 */
/*angular.module('directorsApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });*/
angular.module('directorsApp').controller('MainCtrl',function($scope, $http){
    $http({
            method: 'GET',
            url: './data/directors.json'
        }).then(function mySucces(response) {
            $scope.myDirectors = response.data;
            
        }, function myError(response) {
            $scope.myDirectors = response.statusText;
            console.log('error!'+response.statusText);
        });
});