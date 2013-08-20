'use strict';

angular.module('SignatureRecognitionApp.directives')
.directive('leapCanvas', [function(){
    var directiveDefinitionObject = {
        restrict: 'A',
        scope:{
            'targetService': '@targetService',
            'leapAttributes': '@leapAttributes',
            'port': '@port'
        },
        controller: "LeapMotionController",
        link: {
            pre: function(scope, element, attrs){
                scope.leapAttributes = JSON.parse(scope.leapAttributes.replace(/(['"])?([a-zA-Z0-9]+)(['"])?:/g, '"$2":'));
            },
            post: function(scope, element, attrs){
            }
        },
        templateUrl: "/js/templates/test.html"
    }
    return directiveDefinitionObject;
}]);