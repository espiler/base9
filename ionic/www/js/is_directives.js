// angular.module('radar.directives', [])

// .directive('map', function() {
//   return {
//     restrict: 'E',
//     scope: {
//       onCreate: '&'
//     },
//     link: function ($scope, $element, $attr) {
//       function initialize() {
//         var watchId;
//         var myMarker;

//         var mapOptions = {
//           zoom: 14,
//           mapTypeId: google.maps.MapTypeId.ROADMAP,
//           disableDefaultUI: true,
//           center: new google.maps.LatLng(37.7833, -122.4167)
//         };

//         var styles = [
//         {
//             "featureType": "landscape.man_made",
//             "elementType": "geometry",
//             "stylers": [{"color": "#f7f1df"}]
//         },
//         {
//             "featureType": "landscape.natural",
//             "elementType": "geometry",
//             "stylers": [{"color": "#d0e3b4"}]
//         },
//         {
//             "featureType": "landscape.natural.terrain",
//             "elementType": "geometry",
//             "stylers": [{"visibility": "off"}]
//         },
//         {
//             "featureType": "poi",
//             "elementType": "labels",
//             "stylers": [{"visibility": "off"}]
//         },
//         {
//             "featureType": "poi.attraction",
//             "elementType": "labels.text",
//             "stylers": [{"visibility": "on"}]
//         },
//         {
//             "featureType": "poi.business",
//             "elementType": "all",
//             "stylers": [{"visibility": "off"}]
//         },
//         {
//             "featureType": "poi.medical",
//             "elementType": "geometry",
//             "stylers": [{"color": "#fbd3da"}]
//         },
//         {
//             "featureType": "poi.park",
//             "elementType": "geometry",
//             "stylers": [{"color": "#bde6ab"}]
//         },
//         {
//             "featureType": "road",
//             "elementType": "geometry.stroke",
//             "stylers": [{"visibility": "off"}]
//         },
//         {
//             "featureType": "road",
//             "elementType": "labels",
//             "stylers": [{"visibility": "off"}]
//         },
//         {
//             "featureType": "road.highway",
//             "elementType": "geometry.fill",
//             "stylers": [{"color": "#ffe15f"}]
//         },
//         {
//             "featureType": "road.highway",
//             "elementType": "geometry.stroke",
//             "stylers": [{"color": "#efd151"}]
//         },
//         {
//             "featureType": "road.arterial",
//             "elementType": "geometry.fill",
//             "stylers": [{"color": "#ffffff"},{"visibility": "on"}]
//         },
//         {
//             "featureType": "road.arterial",
//             "elementType": "labels.text",
//             "stylers": [{"visibility": "on"}]
//         },
//         {
//             "featureType": "road.local",
//             "elementType": "geometry.fill",
//             "stylers": [{"color": "black"}]
//         },
//         {
//             "featureType": "road.local",
//             "elementType": "labels.text",
//             "stylers": [{"visibility": "on"}]
//         },
//         {
//             "featureType": "transit.station.airport",
//             "elementType": "geometry.fill",
//             "stylers": [{"color": "#cfb2db"}]
//         },
//         {
//             "featureType": "water",
//             "elementType": "geometry",
//             "stylers": [{"color": "#a2daf2"}]
//         }]
        
//         var styledMap = new google.maps.StyledMapType(styles,
//         {name: "Styled Map"});
//         var map = new google.maps.Map($element[0], mapOptions);
//         map.mapTypes.set('map_style', styledMap);
//         map.setMapTypeId('map_style');
        
//         $scope.onCreate({map: map});

//         $scope.test = "TESTING!!!"

//         $scope.placeMarker = function(position) {
//           //Check if user is in "Place New Event" Mode
//           var newEventWindow = new google.maps.InfoWindow({
//             content: '<div class="newEventWindow" ng-controller="EventWindowController">'+
//             '<input type="text" placeholder="Add Event Title" ngModel="title"></input>'+
//             '<input type="text" placeHolder="Optional Info" ngModel="info"></input>'+
//             'start: <input type="time" ngModel="startTime"></input>'+
//             'end: <input type="time" ngModel="endTime"></input>'+
//             'category: <select name="category">'+
//             '<option value="Party">Party</option>'+
//             '<option value="Concert">Concert</option>'+
//             '<option value="Sports">Sports</option>'+
//             '<option value="Other">Other</option>'+
//             '</select><br>'+
//             '<button ng-click="saveNewEvent(title, info, startTime, endTime, category)">Save Event</button>'+
//             '</div>'
//           });

//           var marker = new google.maps.Circle({
//             map: map,
//             title: event.title,
//             position: position,
//             strokeColor: 'green',
//             strokeOpacity: 0.8,
//             strokeWeight: 2,
//             fillColor: 'green',
//             fillOpacity: 0.35,
//             map: map,
//             center: position,
//             radius: 0
//           });
          
//           newEventWindow.open(map, marker)

//         }   

//         $scope.centerOnMe = function() {
//           console.log('centering')
//           if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(function(pos) {
//               map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
//               map.setZoom(14);
//             })
//           }
//         }
//         google.maps.event.addListener(map, 'click', function(event) {
//           $scope.placeMarker(event.latLng);
//         });
//         // Stop the side bar from dragging when mousedown/tapdown on the map
//         google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
//           e.preventDefault();
//           return false;
//         });


//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(function(pos) {
//             map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
//             map.setZoom(14);
//             myMarker = new google.maps.Marker({
//               position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
//               map: map,
//               icon: '../images/map_loc.png'
//             });
//             watchId = navigator.geolocation.watchPosition(function() {
//               navigator.geolocation.getCurrentPosition(function(pos) {
//                 myMarker.setPosition(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
//               })
//             });
//           })
//         }
//       }

//       // myMarker = new google.maps.Circle({
//       //   position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
//       //   map: map,
//       //   strokeColor: 'white',
//       //   strokeOpacity: 0.9,
//       //   strokeWeight: 2,
//       //   fillColor: 'blue',
//       //   fillOpacity: 0.9,
//       //   radius: 300
//       // });

//       if (document.readyState === "complete") {
//         initialize();
//       } else {
//         google.maps.event.addDomListener(window, 'load', initialize);
//       }
//     }
//   }
// });
