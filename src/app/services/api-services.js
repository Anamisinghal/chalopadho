var apiFactory = function ($http, $q) {

    var API = {};
    API.words = [{
        'img1': './../../assets/images/drink/img1.jpeg',
        'img2': './../../assets/images/drink/img2.jpeg',
        'img3': './../../assets/images/drink/img3.jpeg',
        'img4': './../../assets/images/drink/img4.jpeg',
        'word': 'Drink'
    }, {
        'img1': './../../assets/images/sleep/img1.jpeg',
        'img2': './../../assets/images/sleep/img2.jpeg',
        'img3': './../../assets/images/sleep/img3.png',
        'img4': './../../assets/images/sleep/img4.jpeg',
        'word': 'Sleep'
    }, {
        'img1': './../../assets/images/think/img1.png',
        'img2': './../../assets/images/think/img2.png',
        'img3': './../../assets/images/think/img3.png',
        'img4': './../../assets/images/think/img4.png',
        'word': 'Think'
    }, {
        'img1': './../../assets/images/hard/img1.png',
        'img2': './../../assets/images/hard/img2.jpeg',
        'img3': './../../assets/images/hard/img3.jpeg',
        'img4': './../../assets/images/hard/img4.jpeg',
        'word': 'Hard'
    }];

    API.getRandomWordIndex = (function () {
        let randArr = []
        while (randArr.length < 4) {
            var randNo = Math.floor(Math.random() * 4);
            if (randArr.indexOf(randNo) > -1)
                continue;
            randArr[randArr.length] = randNo;
        }
        return randArr;
    })();

    getUsers = function () {
        if (localStorage.hasOwnProperty('users')) {
            return JSON.parse(localStorage.users);
        }
        return [];
    }

    API.loginUser = function (user) {
        var deferred = $q.defer();
        if (localStorage.hasOwnProperty('users')) {
            let users = getUsers();
            let existUser = users.find((u) => {
                return u.email == user.email && u.password == user.password;
            })
            if (existUser) {
                deferred.resolve({
                    username: existUser.name
                });
                localStorage.username = existUser.name;
                localStorage.useremail = existUser.email;
            } else {
                deferred.reject({
                    message: 'email "' + user.email + '" is not found/registered'
                });
            }
        } else {
            deferred.reject({
                message: 'email "' + user.email + '" is not found/registered'
            });
        }
        return deferred.promise;
    }
    API.createUser = function (user) {
        var deferred = $q.defer();
        if (localStorage.hasOwnProperty('users')) {
            let users = getUsers();
            let duplicate = users.find((u) => {
                return u.email == user.email;
            })
            if (duplicate) {
                deferred.reject({
                    message: 'email "' + user.email + '" is already registered'
                });
            } else {
                users.push(user);
                localStorage.users = JSON.stringify(users);
                deferred.resolve();
            }
        } else {
            localStorage.users = JSON.stringify([user])
            deferred.resolve();
        }
        return deferred.promise;
    }

    return API;

}

module.exports = apiFactory;