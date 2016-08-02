(function () {
  'use strict';

  angular.module('quadro').directive('campo', [campoDirective]);

  function campoDirective() {
    return {
      restrict: 'E',
      scope: {
        posX: '=',
        posY: '='
      },
      require: 'ngModel',
      templateUrl: 'app/view/campo.html',
      link: function (scope, elem, attrs, ctrl) {
        elem.css({
          position: 'absolute',
          left: scope.posX+'px',
          top: scope.posY+'px',
          width: '5em',
          height: '1em'
        });

        // view -> model
        elem.on('blur', function() {
          ctrl.$setViewValue(elem.html());
        });

        // model -> view
        ctrl.$render = function() {
          elem.html(ctrl.$viewValue);
        };

        // load init value from DOM
        ctrl.$setViewValue(elem.html());

        elem[0].focus();
      }
    }
  }
})();
