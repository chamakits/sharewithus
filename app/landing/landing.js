(function(that) {
    var SERVER_ROOT = "http://localhost:9090";
    that.SERVER_ROOT = SERVER_ROOT;
    var landingSite = angular.module("landingSite", ["UserControllers", "ui.bootstrap", "ngResource", "ngCookies"]);

    var userControllers = angular.module("UserControllers", []);
    userControllers.controller("UserController", ["$scope", "$modal", function($scope, $modal) {

        $scope.signUpModal = function() {
            var modalInstance = $modal.open({
                templateUrl: 'singUpModalContent.html',
                controller: 'SignUpController',
                size: 'md',
                resolve: {}
            });
        };
        $scope.loginModal = function() {
            var modalInstance = $modal.open({
                templateUrl: 'loginModalContent.html',
                controller: 'LogInController',
                size: 'md',
                resolve: {}
            });
        };
    }]);


    var LOGIN_URL = SERVER_ROOT + "/login";
    userControllers.factory("LoginService", ["$resource", function($resource) {
        return $resource(LOGIN_URL, {}, {
            query: {
                method: "POST",
                //TODO if it fails, it might be from missing params here.  but shouldn't be.
                //TODO trying to fully validate what I said.
                headers: {
                    'Content-Type': 'application/json'
                }

            }
        });
    }]);



    //LogIn
    userControllers.controller("LogInController", ["$scope", "$cookies", "$modalInstance", "LoginService",
        function($scope, $cookies, $modalInstance, LoginService) {

            $scope.ok = function() {
                $modalInstance.close();
                var loginService = new LoginService();
                loginService.userName = $scope.userName;
                loginService.password = $scope.password;
                loginService.$save().then(function(succ) {
                    console.log("Succeded!")
                    console.log(succ)
                    $cookies.token = succ.token;
                }, function(err) {
                    console.log("Failed!")
                    console.log(err)
                });
            };

            $scope.cancel = function() {
                $modalInstance.dismiss('cancel');
            };

        }
    ]);

    var REGISTER_URL = SERVER_ROOT + "/register";
    userControllers.factory("RegisterService", ["$resource", function($resource) {
        return $resource(REGISTER_URL, {}, {
            query: {
                method: "POST",
                //TODO if it fails, it might be from missing params here.  but shouldn't be.
                //TODO trying to fully validate what I said.
                headers: {
                    'Content-Type': 'application/json'
                }

            }
        });
    }]);
    userControllers.controller("SignUpController", ["$scope", "$cookies", "$modalInstance", "RegisterService",
        function($scope, $cookies, $modalInstance, RegisterService) {

            $scope.ok = function() {
                $modalInstance.close();
                var registerService = new RegisterService();
                registerService.userName = $scope.userName;
                registerService.password = $scope.password;
                registerService.$save().then(function(succ) {
                    console.log("Succeded!")
                    console.log(succ)
                    $cookies.token = succ.token;
                }, function(err) {
                    console.log("Failed!")
                    console.log(err)
                });
            };

            $scope.cancel = function() {
                $modalInstance.dismiss('cancel');
            };

        }
    ]);


}(this));