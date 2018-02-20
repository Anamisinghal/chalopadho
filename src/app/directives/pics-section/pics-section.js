var picsSection = function (API) {
    return {
        restrict: 'E',
        scope: {
            level: "=",
            showOverlay: "="
        },
        templateUrl: 'app/directives/pics-section/pics-section.html',
        controller: ['$scope', function ($scope) {
            $scope.word = API.words[$scope.level];
        }]
    }
};

module.exports = picsSection;