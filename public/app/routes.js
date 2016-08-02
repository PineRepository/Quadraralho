(function () {
  'use strict';
  angular.module('quadro').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
          when('/', {
            controller: 'QuadroController',
            template: '<quadro></quadro>'
          }).
          otherwise('/');
      }
    ]);
})();
