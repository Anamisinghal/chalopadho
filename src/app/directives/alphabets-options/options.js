var alphabetsOptions = function (API) {
    return {
        restrict: 'E',
        scope: {
            clear: '&cancel',
            done: '&done',
            level: "=",
            newData: "=",
            selectOption: "&onSelect",
            showOverlay: "="
        },
        templateUrl: 'app/directives/alphabets-options/options.html',
        link: function (scope, element, attrs) {
            scope.$watch('newData', function (oldValue, newValue) {
                let text = [];
                let word = API.words[scope.level].word;
                let puzzledWord = [];
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

                while (text.length < 12) {
                    randChar = possible.charAt(Math.floor(Math.random() * possible.length));
                    if (text.indexOf(randChar) > -1)
                        continue;
                    text[text.length] = randChar;
                }

                while (puzzledWord.length < word.length) {
                    var randNo = Math.floor(Math.random() * 12);
                    if (puzzledWord.indexOf(randNo) > -1)
                        continue;
                    text[randNo] = word.charAt(puzzledWord.length);
                    puzzledWord[puzzledWord.length] = randNo;
                }
                scope.newData = false;

                scope.text = angular.copy(text);

            })
        },
        controller: ['$scope', function ($scope) {

            $scope.selectedCharacter = function (option, index) {
                $scope.text[index] = '';
                return $scope.selectOption({
                    selected: option
                });
            }

        }]
    }
};

module.exports = alphabetsOptions;