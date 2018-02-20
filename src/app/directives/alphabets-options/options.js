var alphabetsOptions = function (API) {
    return {
        restrict: 'E',
        scope: {
            cancel: '&cancel',
            done: '&done',
            level: "=",
            selectOption: "&onSelect",
            showOverlay: "="
        },
        templateUrl: 'app/directives/alphabets-options/options.html',
        link: function () {

        },
        controller: ['$scope', function ($scope) {
            let text = [];
            let word = API.words[$scope.level].word;
            let puzzledWord = [];
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            while (text.length < 12) {
                randChar = possible.charAt(Math.floor(Math.random() * possible.length));
                if (text.indexOf(randChar) > -1)
                    continue;
                text[text.length] = randChar;
            }

            while (puzzledWord.length < word.length) {
                var randNo = Math.floor(Math.random() * 11) + 1;
                if (puzzledWord.indexOf(randNo) > -1)
                    continue;
                text[randNo] = word.charAt(puzzledWord.length);
                puzzledWord[puzzledWord.length] = randNo;
            }

            $scope.text = angular.copy(text);

        }]
    }
};

module.exports = alphabetsOptions;