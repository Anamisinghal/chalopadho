var gameController = function ($scope, API, Flash) {
    $scope.user = localStorage.username;
    if (!$scope.user)
        window.location = '/#!/login/';

    $scope.showOverlay = false;
    const randomArr = API.getRandomWordIndex;
    let level = localStorage.getItem('level') && localStorage.getItem('level') < 4 ? localStorage.getItem('level') : 0;
    $scope.wordIndex = randomArr[level];

    $scope.onSuccess = function () {
        document.getElementsByClassName('overlay')[0].style.display = 'block';
        $scope.showOverlay = true;
        localStorage.setItem('level', parseInt(level) + 1);
        $scope.wordIndex = randomArr[localStorage.getItem('level')];
    }

    $scope.nextLevel = function () {
        location.href = '/#!/game/';
        $scope.showOverlay = false
        document.getElementsByClassName('overlay').style.display = 'none';
    }
};

module.exports = gameController;