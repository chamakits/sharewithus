(function(that) {
    var landingSite = angular.module("landingSite", ["UserControllers"]);

    var userControllers = angular.module("UserControllers", []);

    userControllers.controller("UserController", ["$scope", function($scope) {
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
    }]);

    userControllers.controller("LogIn", ["$scope", function($scope) {
        $scope.bla = "";
    }]);
    userControllers.controller("SignUp", ["$scope", function($scope) {
        $scope.bla = "";
    }]);


}(this));