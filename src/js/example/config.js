(function (angular) {
    'use strict';

    var crudExample = angular.module('meanBoilerplate.crudExample', ['ui.router',  'ngResource', 'meanBoilerplate.sockets']);

    crudExample.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise('/');

            $stateProvider.state('list', {
                url: '/',
                templateUrl: '/crudExample/index.html',
                controller: 'CrudExampleController'
            });

            $stateProvider.state('list.new', {
                url: 'new'
            });

            $stateProvider.state('list.edit', {
                url: 'edit/{parameterName}'
            });
    }]);

})(angular);
