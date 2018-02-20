var gameLevel = function (API) {
    return {
        restrict: 'E',
        scope: {
            level: "=",
            onSuccess: "&onSuccess",
            showOverlay: "="
        },
        templateUrl: 'app/directives/game-level/level.html',
        controller: ['$scope', function ($scope) {
            $scope.answer = [];
            $scope.newData = true;
            $scope.sendAnswer = function (selected) {
                $scope.answer.push(selected);
            }
            $scope.done = function () {
                if ($scope.answer.join('').toLowerCase() === API.words[$scope.level].word.toLowerCase()) {
                    return $scope.onSuccess();
                } else {
                    return $scope.cancel();
                }
            }

            $scope.cancel = function () {
                $scope.answer = [];
                $scope.newData = true;
            }
        }]
    }
};

module.exports = gameLevel;