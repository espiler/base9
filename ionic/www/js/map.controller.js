angular.module('radar')
.controller('MapController', [
	// 'MapFactory', 
	// 'MarkerFactory', 
	'HttpHandler', 
	'$scope',
  '$ionicLoading',
  'uiGmapGoogleMapApi',
	function(Http, $scope, $ionicLoading, uiGmapGoogleMapApi) {
  
  // var map = Map.initialize();
  // var myMarker = Map.geoLocate();

  $scope.map = { center: { latitude: 37, longitude: 56 }, zoom: 8, refresh: false, options: {} };
  $scope.map.options.styles = [
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{"color": "#f7f1df"}]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [{"color": "#d0e3b4"}]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry",
            "stylers": [{"visibility": "off"}]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{"visibility": "off"}]
        },
        {
            "featureType": "poi.attraction",
            "elementType": "labels.text",
            "stylers": [{"visibility": "on"}]
        },
        {
            "featureType": "poi.business",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
        },
        {
            "featureType": "poi.medical",
            "elementType": "geometry",
            "stylers": [{"color": "#fbd3da"}]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{"color": "#bde6ab"}]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{"visibility": "off"}]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{"visibility": "off"}]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#ffe15f"}]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#efd151"}]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#ffffff"},{"visibility": "on"}]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text",
            "stylers": [{"visibility": "on"}]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{"color": "black"}]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [{"visibility": "on"}]
        },
        {
            "featureType": "transit.station.airport",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#cfb2db"}]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{"color": "#a2daf2"}]
        }];

  $scope.markers = [];

  $scope.geoLocate = function() {
    console.log("locating....")
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos) {
        $scope.map.center.latitude = pos.coords.latitude;
        $scope.map.center.longitude = pos.coords.longitude;
        $scope.map.zoom = 14
        $scope.$apply();
      })
    }
  }

  //         strokeColor: 'green',
  //         strokeOpacity: 0.8,
  //         strokeWeight: 2,
  //         fillColor: 'green',
  //         fillOpacity: 0.35,

  Http.getMarkers(function(events) {
    events.forEach(function(event) {
      event.latitude = event.lat;
      event.longitude = event.lng;
      event.idKey = event.id;
      event.stroke = {
        color: 'green',
        weight: 2,
        opacity: 1
      }
      event.fill = {
        color: 'green',
        opacity: 0.35
      }
      event.radius = Math.random()*650;
      $scope.markers.push(event);
    });
  });

  uiGmapGoogleMapApi.then(function(maps) {
    $scope.geoLocate();
  });


/* FROM IONIC STARTER MAPS */
  // $scope.mapCreated = function(map) {
  //   $scope.map = map;
  // };

  // $scope.centerOnMe = function () {
  //   console.log("Centering");
  //   if (!$scope.map) {
  //     console.log("NO SCOPE MAP")
  //     return;
  //   }

  //   navigator.geolocation.getCurrentPosition(function (pos) {
  //     console.log('Got pos', pos);
  //     $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
  //     $scope.loading.hide();
  //   }, function (error) {
  //     alert('Unable to get location: ' + error.message);
  //   });
  // };

  

}])
