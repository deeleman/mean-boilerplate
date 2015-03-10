(function (angular) {
    'use strict';

    var examples = angular.module('meanBoilerplate.crudExample');

    examples.controller('CrudExampleController', [
        '$scope', '$http', 'Example', 'sockets', '$state',
        function ($scope, $http, Example, sockets, $state) {

            var listExamples = function () {
                $scope.examples = Example.list();
            };

            $scope.reset = function(refresh) {
                refresh && listExamples();
                $scope.isNew = false;
                $scope.example = null;
            };

            $scope.getExample = function (parameterName) {
                // Example list is repopulated when page is refreshed by hand
                $scope.reset(!$scope.examples);
                Example.fetch({ parameterName: parameterName }, function (example) {
                    $scope.example = example;
                });
            };

            $scope.addNew = function () {
                $scope.isNew = true;
                $scope.example = new Example();
            };

            $scope.createExample = function () {
                $scope.example.$save(function() {
                    $state.go('list.edit', { parameterName: $scope.example.parameterName } );
                });
            };

            sockets.on('examples:new', function(example) {
                $scope.examples.unshift(example);
            });

            $scope.updateExample = function () {
                $scope.example.$update(function () {
                    listExamples();
                });
            };

            $scope.deleteExample = function (example, $event) {
                if (!window.confirm('Are you sure? (replace this with a directive)')) {
                    return $event.stopPropagation();
                }
                var parameterName = example.parameterName;
                example.$remove(function () {
                    $scope.examples = $scope.examples.filter(function (example) {
                        return example.parameterName !== parameterName;
                    });
                    $state.go('list');
                });
            };

            var stateHandler = function (stateName, params) {
                (stateName === 'list') && $scope.reset(true);
                (stateName === 'list.new') && $scope.addNew();
                (stateName === 'list.edit') && $scope.getExample(params.parameterName);
            };

            $scope.$on('$stateChangeStart',
                function (event, toState, toParams) {
                    stateHandler(toState.name, toParams);
                }
            );

            stateHandler.call(this, $state.current.name, $state.params);
    }]);
})(angular);
