'use strict';

angular.module('directive.projectOverview',[])
.directive('projectOverview',  function () {
    return {
        replace: true,
        restrict: 'E',
        scope: {
            project: '='
        },
        templateUrl: 'templates/projectOverview.html',
        controller: function($scope){
          //alert('projectOverview');
        }
    };
});

