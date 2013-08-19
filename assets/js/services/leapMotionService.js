'use strict';

angular.module('SignatureRecognitionApp.services')
.factory('leapMotionService', ['rootScope', function($rootScope){
    var leapMotion;
    if((typeof(WebSocket) == 'undefined')&&(typeof(MozWebSocket) != 'undefined')){
        WebSocket = MozWebSocket;
    }


    function initialize(){
        leapMotion = new WebSocket("ws://localhost:6437/");

        leapMotion.onmessage = function(event){
            console.debug(event);
            rootScope.$broadcast('leapReceived', event);
        };

        leapMotion.onclose = function(event){
            leapMotion = null;
        };
    }

    initialize();
    return leapMotion;

 }]);