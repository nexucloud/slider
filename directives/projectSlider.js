'use strict';

angular.module('directive.projectSlider',[])

.directive('projectSlider',  function () {
    return {
        replace: true,
        restrict: 'A',
        scope: {
            itemWidth: '=',
            totalItems: '='
        },
        transclude: true,
        templateUrl: 'templates/paceslider.html',
        controller: ['$scope', '$element', '$attrs', function(scope, element, attrs) {
            
            //alert(scope.itemWidth);
            console.log(attrs);
            console.log(element);
            // alert($scope.totalItems);

            // Init

        }]
    };
});