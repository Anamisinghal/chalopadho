var answerSection = function (API) {
    return {
        restrict: 'E',
        scope: {
            answer: "=",
            level: "="
        },
        templateUrl: 'app/directives/answer-section/answer-section.html',
        controller: ['$scope', function ($scope) {
            $scope.answerlength = new Array(API.words[$scope.level].word.length);
        }]
    }
};

module.exports = answerSection;