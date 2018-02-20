var loginCtrl = function ($scope, $rootScope, API, Flash) {
    $scope.user = {
        email: '',
        password: ''
    }
    $scope.loginUser = function (status) {
        if (status == 0)
            API.loginUser($scope.user).then((response) => {
                let message = "Logged In Successfull!! "
                Flash.create('success', message);
                window.location = '/#!/?user=' + response.username;

            }, function (error) {
                let message = "Login Failed"
                Flash.create('danger', message);
            });
    }

    $scope.createUser = function () {
        $scope.user = {
            email: '',
            password: ''
        }
        window.location = '/#!/registration/';
    }
}

module.exports = loginCtrl