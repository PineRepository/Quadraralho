(function () {
  'use strict';

  angular.module('quadro').directive('quadro', ['Campos', quadroDirective]);

  function quadroDirective(Campos) {
    return {
      restrict: 'E',
      templateUrl: 'app/view/quadro.html',
      link: function (scope, elem, attrs, ctrl) {
        elem.css({
          position: 'fixed',
          width: '100%',
          height: '100%'
        });
        elem.on('click', function (evt) {
          if (evt.target !== elem[0]) {
            return;
          }
          var propriedades = {
            x: evt.clientX,
            y: evt.clientY
          }
          Campos.add(propriedades);
        });
      }
    }
  }
})();
