require('angular');
require('angular-route');
require('angular-animate');
require('angular-flash-alert');
var homeController = require('./home/home.js');
var registrationController = require('./registration/registration.js');
var loginController = require('./login/login.js');
var gameController = require('./game/game.js');
var apiFactory = require('./services/api-services.js');

// Import directives
var alphabetsOptions = require('./directives/alphabets-options/options.js');
var answerSection = require('./directives/answer-section/answer-section.js');
var gameLevel = require('./directives/game-level/level.js');
var inputField = require('./directives/input-field/input.js');
var picsSection = require('./directives/pics-section/pics-section.js');

var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngFlash'])

app.config([
    '$locationProvider',
    '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        // routes
        $routeProvider
            .when("/", {
                templateUrl: "app/home/home.html",
                controller: "homeController"
            })
            .when("/registration", {
                templateUrl: "app/registration/registration.html",
                controller: "registrationController"
            })
            .when("/login", {
                templateUrl: "app/login/login.html",
                controller: "loginController"
            })
            .when("/game", {
                templateUrl: "app/game/game.html",
                controller: "gameController"
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);

app.controller('homeController', ['$scope', 'API', 'Flash', homeController]);
app.controller('registrationController', ['$scope', 'API', 'Flash', registrationController]);
app.controller('loginController', ['$scope', '$rootScope', 'API', 'Flash', loginController]);
app.controller('gameController', ['$scope', 'API', 'Flash', gameController]);
app.factory('API', ['$http', '$q', apiFactory]);


app.directive('alphabetsOptions', ['API', alphabetsOptions]);
app.directive('answerSection', ['API', answerSection]);
app.directive('gameLevel', ['API', gameLevel]);
app.directive('inputField', [inputField]);
app.directive('picsSection', ['API', picsSection]);