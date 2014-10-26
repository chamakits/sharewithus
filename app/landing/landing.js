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
                controller: 'SignUp',
                size: 'sm',
                resolve: {}
            });
        };
        $scope.loginModal = function() {
            var modalInstance = $modal.open({
                templateUrl: 'loginModalContent.html',
                controller: 'LogIn',
                size: 'sm',
                resolve: {}
            });
        };
    }]);

    //LogIn
    userControllers.controller("LogIn", ["$scope", "$modalInstance", function($scope, $modalInstance) {

        $scope.ok = function() {
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };

    }]);
    userControllers.controller("SignUp", ["$scope", "$modalInstance", function($scope, $modalInstance) {

        $scope.ok = function() {
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };

    }]);


}(this));

(function(that) {
    angular.module('landingSite').controller('ModalDemoCtrl', function($scope, $modal, $log) {

        $scope.items = ['item1', 'item2', 'item3'];

        $scope.open = function(size) {

            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    });

    // Please note that $modalInstance represents a modal window (instance) dependency.
    // It is not the same as the $modal service used above.

    angular.module('landingSite').controller('ModalInstanceCtrl', function($scope, $modalInstance, items) {

        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function() {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    });
}(this));