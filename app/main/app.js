(function(that) {
    var shareWithUsApp = angular.module("shareWithUsApp", ["appControllers", "ui.bootstrap", "ngResource", "ngCookies", "ngRoute"]);


    function MenuLinks(template, controller, link, text) {
        this.template = template;
        this.controller = controller;
        this.link = link;
        this.text = text;
    };
    that.MenuLinks = MenuLinks;

    var appControllers = angular.module("appControllers", []);

    var links = [
        new MenuLinks("/app/things/places-part.html",
            "PlacesCtrl", "/things/p/{place}", "Places"),
        new MenuLinks("/app/main/home.html",
            null, "/", "Home"),
    ];


    appControllers.controller("MenuController", ["$scope", function($scope) {
        $scope.headers = links;
    }]);

    shareWithUsApp.config(["$routeProvider", function($routeProvider) {

        var routeProvider = $routeProvider;
        _(links).forEach(function(link) {
            console.log("Setting links.");
            routeProvider = routeProvider.when(link.link, {
                templateUrl: link.template,
                controller: link.controller
            });
        });
        routeProvider.otherwise({
            redirectTo: "/"
        });

    }]);

    // appControllers.controller("")

}(this));