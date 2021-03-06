(function() {
    'use strict';

    angular
        .module('royalhallsApp')
        .controller('PaymentDialogController', PaymentDialogController);

    PaymentDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Payment', 'Contract'];

    function PaymentDialogController($timeout, $scope, $stateParams, $uibModalInstance, entity, Payment, Contract) {
        var vm = this;

        vm.payment = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;
        vm.contracts = Contract.query();

        $timeout(function() {
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear() {
            $uibModalInstance.dismiss('cancel');
        }

        function save() {
            vm.isSaving = true;
            if (vm.payment.id !== null) {
                Payment.update(vm.payment, onSaveSuccess, onSaveError);
            } else {
                Payment.save(vm.payment, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess(result) {
            $scope.$emit('royalhallsApp:paymentUpdate', result);
            $scope.$emit('royalhallsApp:contractUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError() {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.paymentDueDate = false;
        vm.datePickerOpenStatus.creationDate = false;

        function openCalendar(date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
