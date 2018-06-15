(function(){
    'use strict';
    angular.module('birthdayApp', [])
    .controller('birthdayAppController', birthdayAppController);
    birthdayAppController.$inject = ['$scope'];
    function birthdayAppController($scope){
        $scope.variable = "Shubham";
    }
})();