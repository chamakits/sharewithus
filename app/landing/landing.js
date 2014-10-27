(function(that) {
    var landingSite = angular.module("landingSite", ["UserControllers", "ui.bootstrap"]);

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

    //LogIn
    userControllers.controller("LogInController", ["$scope", "$modalInstance", function($scope, $modalInstance) {

        $scope.ok = function() {
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };

    }]);
    userControllers.controller("SignUpController", ["$scope", "$modalInstance", function($scope, $modalInstance) {

        $scope.ok = function() {
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };

    }]);


}(this));