(function(that) {

    var appControllers = angular.module("appControllers");

    var URLSeeThingsInPlaces = "http://localhost:18080/mock-data/things/items.json";

    appControllers.factory("SeeThingsInPlaceService", ["$resource", function($resource) {
        return $resource(URLSeeThingsInPlaces, {}, {
            query: {
                method: "GET",
                //TODO if it fails, it might be from missing params here.  but shouldn't be.
                //TODO trying to fully validate what I said.
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        });
    }]);


    appControllers.controller("PlacesCtrl", ["$scope", "$routeParams", "SeeThingsInPlaceService",
        function($scope, $routeParams, SeeThingsInPlaceService) {
            var thingServer = new SeeThingsInPlaceService();
            console.log(thingServer);
            thingServer.$get({}, function(items) {
                console.log("Items:");
                console.log(items);
            });

        }
    ]);

}(this));