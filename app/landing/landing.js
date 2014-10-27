(function(that) {
    var landingSite = angular.module("landingSite", ["UserControllers", "ui.bootstrap", "ngResource"]);

    var userControllers = angular.module("UserControllers", []);
    userControllers.controller("UserController", ["$scope", "$modal", function($scope, $modal) {
        $scope.loginDisplay = function() {
            console.log("loginDisplay");
            $scope.showLogin = true;
            $scope.showSignUp = false;
        };
        $scope.signUpDisplay = function() {
            console.log("signUpDisplay");
            $scope.showLogin = false;
            $scope.showSignUp = true;
            // setTimeout(function() {
            //     $scope.$apply(function() {
            //         $scope.showLogin = true;
            //         $scope.showSignUp = true;
            //     });
            // }, 1000);
        };
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

    var LOGIN_URL = "http://localhost:9090/api/add-task";
    userControllers.factory("LoginService", ["$resource", function($resource) {
        return $resource(LOGIN_URL, {}, {
            query: {
                method: "POST",
                //TODO if it fails, it might be from missing params here.  but shouldn't be.
                //TODO trying to fully validate what I said.
                params: {
                    "data": {},
                    "task": {}
                },
                headers: {
                    'Content-Type': 'application/json'
                },
                response: function(resp) {
                    console.log("Success on resource query set.");
                }

            }
        });
    }]);



    //LogIn
    userControllers.controller("LogInController", ["$scope", "$modalInstance", "LoginService",
        function($scope, $modalInstance, LoginService) {

            $scope.ok = function() {
                $modalInstance.close();
                var loginService = new LoginService();
                loginService.userName = $scope.userName;
                loginService.password = $scope.password;
                loginService.$save().then(function(succ) {
                    console.log("Succeded!")
                    console.log(succ)
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

    userControllers.controller("SignUpController", ["$scope", "$modalInstance", function($scope, $modalInstance) {

        $scope.ok = function() {
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };

    }]);


}(this));
