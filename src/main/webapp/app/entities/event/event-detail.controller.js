(function() {
    'use strict';

    angular
        .module('royalhallsApp')
        .controller('EventDetailController', EventDetailController);

    EventDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Event', 'EventExtraOption', 'EventType', 'Hall', 'Contract'];

    function EventDetailController($scope, $rootScope, $stateParams, previousState, entity, Event, EventExtraOption, EventType, Hall, Contract) {
        var vm = this;

        vm.event = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('royalhallsApp:eventUpdate', function(event, result) {
            vm.event = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
