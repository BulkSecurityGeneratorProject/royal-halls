'use strict';

describe('Controller Tests', function() {

    describe('ExtraOption Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockExtraOption, MockExtraOptionVariant, MockExtraOptionColor;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockExtraOption = jasmine.createSpy('MockExtraOption');
            MockExtraOptionVariant = jasmine.createSpy('MockExtraOptionVariant');
            MockExtraOptionColor = jasmine.createSpy('MockExtraOptionColor');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'ExtraOption': MockExtraOption,
                'ExtraOptionVariant': MockExtraOptionVariant,
                'ExtraOptionColor': MockExtraOptionColor
            };
            createController = function() {
                $injector.get('$controller')("ExtraOptionDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'royalhallsApp:extraOptionUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
