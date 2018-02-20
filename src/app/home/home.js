var WelcomeCtrl = function ($scope, API, Flash) {
    $scope.user = localStorage.username;
    if (!$scope.user)
        window.location = '/#!/login/';
};

module.exports = WelcomeCtrl;