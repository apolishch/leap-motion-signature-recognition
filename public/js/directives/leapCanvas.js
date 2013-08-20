'use strict';

angular.module('SignatureRecognitionApp.directives')
.directive('leapCanvas', [function(){
    var directiveDefinitionObject = {
        restrict: 'A',
        scope:{
            'target-service': '@targetService'
        },
        controller: "LeapMotionController",
        link: function postLink(scope, element, attrs){

        }
    }
    return directiveDefinitionObject;
}]);