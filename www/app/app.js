// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('RoomateApp', ['ionic', 'directive.g+signin', 'firebase'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      //DEFAULT LOGIN PAGE
      //LOGIN THROUGH FB OR GOOGLE HERE
      .state('login', {
        url: '/login',
        templateUrl: 'app/Login/loginLanding.html'
      })

      // .state('facebook', {
      //   url: '/fb',
      //   templateUrl: 'app/Login/facebookLogin.html'
      // })

      // PROFILE PAGE
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/Profile/profile.html'
      })

      //APP CONTENT PAGES
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'app/Menu/menu.html'
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'app/Search/search.html'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'app/Browse/browse.html'
          }
        }
      })
      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'app/Playlist/playlists.html'
          }
        }
      })

      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'app/Playlist/playlist.html'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  });
