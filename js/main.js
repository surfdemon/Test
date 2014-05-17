'use strict';

angular.module('testapp', [ 'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'])
  .controller('mainController', ['$scope', function($scope){
                $scope.items = [
                    { 
                        id : '1',
                        name: 'Rob'
                    },
                    {
                        id: '2',
                        name: 'Zoe'
                    }];
        }]);