'use strict';

angular.module('SignatureRecognitionApp.directives')
.directive('leapCanvas', [function(){
    var directiveDefinitionObject = {
        restrict: 'A',
        scope:{
            'target-service': '@target-service'
        },
        controller: "LeapMotionController",
        link: function postLink(scope, element, attrs){

        }
    }
    return directiveDefinitionObject;
}]);