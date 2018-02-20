var registrationCtrl = function ($scope, API, Flash) {
    $scope.user = {
        name: '',
        email: '',
        password: ''
    }
    $scope.saveUser = function (status) {
        if (status == 0)
            API.createUser($scope.user).then(() => {
                let message = "Registration Successfull!! Please login to your account"
                Flash.create('success', message);
                window.location = '/#!/login/'
            }, function (error) {
                let message = "Registration Failed"
                Flash.create('danger', message);
            });
    }

    $scope.loginUser = function () {
        $scope.user = {
            name: '',
            email: '',
            password: ''
        }
        window.location = '/#!/login/'
    }
}

module.exports = registrationCtrl