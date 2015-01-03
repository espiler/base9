angular.module('radar', [
  // 'radar.directives',
  'uiGmapgoogle-maps',
	'ionic',
	'ui.bootstrap'
	])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
})

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyBnemtHaxtZyoxOU0NYEPXNxJwIhG0DeCE',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
})