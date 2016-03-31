'use strict';
angular.module('directorsApp').controller('AboutCtrl',function($scope, $http){
    $http({
            method: 'GET',
            url: './data/director.json'
        }).then(function mySucces(response) {
            $scope.myDirector = response.data;
            
        }, function myError(response) {
            $scope.myDirector = response.statusText;
        });
});