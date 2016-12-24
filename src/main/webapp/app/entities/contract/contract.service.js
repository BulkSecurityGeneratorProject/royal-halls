(function() {
    'use strict';
    angular
        .module('royalhallsApp')
        .factory('Contract', Contract);

    Contract.$inject = ['$resource', 'DateUtils'];

    function Contract ($resource, DateUtils) {
        var resourceUrl =  'api/contracts/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.contractDate = DateUtils.convertDateTimeFromServer(data.contractDate);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
