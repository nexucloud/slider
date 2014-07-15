'use strict';

angular.module('slider', ['ngAnimate','directive.projectSlider','directive.projectOverview'])
.controller("paceController", ['$scope' , function($scope){
    // Dummy Data 
    $scope.projects = [];
    $scope.production = [];
    for (var i = 1; i <= 10; i++) {
        $scope.projects.push(
            { title: i,
             children: [
             {title: 'child ' + i + '-1'},
             {title: 'child ' + i + '-2'}
             ]}
        );
        if ((i %2) == 0){
            $scope.production.push(
            { title: i,
             children: [
             {title: 'child ' + i + '-1'},
             {title: 'child ' + i + '-2'}
             ]}
        );
        }
    };

    // - Pace Slider Init
    $scope.childToggleCtr = 0;

    var slideAmount = 0;
    var slideCurrent = 0;
    var itemWidth = 160;

    function childToggleCt(project){

        project.childToggle = !project.childToggle;

        angular.forEach(project.children, function(value, key) {
            value.childToggle = project.childToggle;
        });

        if(project.childToggle){
            $scope.childToggleCtr = $scope.childToggleCtr + project.children.length;
        } else {
            $scope.childToggleCtr = $scope.childToggleCtr - project.children.length;
        }
        $scope.childWidth = {'width' : '' + $scope.childToggleCtr * itemWidth + 'px'};
    };
        
    // - Slide Controls
    var slideAmount = 0;
    var itemWidth = 160;

    function slidePrev(){
        if (slideCurrent == 0) { return; }
        slideCurrent--;
        slideAmount += itemWidth;
        $scope.slide={'-webkit-transform' : 'translate3d(' + slideAmount + 'px, 0px, 0px)'} ;

    }
    
    function slideNext(){
       var shown = $scope.projects.length - 1 + $scope.childToggleCtr; 
         if (slideCurrent == shown) { return; }
        slideCurrent++;
        slideAmount -= itemWidth;
        $scope.slide={'-webkit-transform' : 'translate3d(' + slideAmount + 'px, 0px, 0px)'} ;
    }

    $scope.slidePrev = slidePrev;
    $scope.slideNext = slideNext;
    $scope.childToggleCt = childToggleCt;


}]);

