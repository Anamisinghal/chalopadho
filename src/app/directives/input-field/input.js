var inputField = function () {
    return {
        restrict: 'E',
        scope: {
            selectedOption: '='
        },
        templateUrl: 'app/directives/input-field/input.html',
        controller: ['$scope', function ($scope) {

        }]
    }
};

module.exports = inputField;