(function (angular) {
    'use strict';

    var crudExample = angular.module('meanBoilerplate.crudExample');

    crudExample.factory('Example', ['$resource', function ($resource) {
        return $resource('/api/examples/:parameterName', { parameterName: '@parameterName' }, {
            list:   { method:'GET', isArray: true },
            fetch:  { method:'GET' },
            create: { method:'POST' },
            update: { method:'PUT' },
            remove: { method:'DELETE' }
        });
    }]);

})(angular);
