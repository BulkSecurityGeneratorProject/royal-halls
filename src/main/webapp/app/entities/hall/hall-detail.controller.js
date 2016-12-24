(function() {
    'use strict';

    angular
        .module('royalhallsApp')
        .controller('HallDetailController', HallDetailController);

    HallDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Hall'];

    function HallDetailController($scope, $rootScope, $stateParams, previousState, entity, Hall) {
        var vm = this;

        vm.hall = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('royalhallsApp:hallUpdate', function(event, result) {
            vm.hall = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
