(function () {
  'use strict';

  angular.module('quadro').controller('QuadroController', QuadroController);

  QuadroController.$inject = ['$scope', 'Campos'];

  function QuadroController($scope, Campos) {
    $scope.campos = Campos.getCampos();

    Campos.onUpdate(function () {
      $scope.campos = Campos.getCampos();
      $scope.$apply();
    });
  };
})();
