'use strict';


//TODO set port dynamically
angular.module('SignatureRecognitionApp.services')
.factory('leapMotionService', [function(){
    var leapMotion = {};
    if ((typeof(WebSocket) == 'undefined') &&
        (typeof(MozWebSocket) != 'undefined')) {
        WebSocket = MozWebSocket;
    }
    leapMotion.leapSocket = new WebSocket("ws://localhost:6437/");
    leapMotion.leapSocket.onopen = function(event){

    }

    leapMotion.leapSocket.onmessage = function(event){
        console.debug(event);
    }

    leapMotion.leapSocket.onclose = function(event){

    }
    return leapMotion;

 }]);