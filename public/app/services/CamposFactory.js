(function () {
  'use strict';

  angular.module('quadro').factory('Campos', [CamposFactory]);

  function CamposFactory() {
    var campos = [],
      observerCallbacks = [];

    function getCamposFn() {
      return campos;
    }

    function addFn(propriedades) {
      var campo = {
        x: propriedades.x,
        y: propriedades.y,
        content: ''
      };
      
      campos.push(campo);
      notifyObservers();
    }

    function onUpdateFn(callback) {
      observerCallbacks.push(callback);
    }

    function notifyObservers() {
      angular.forEach(observerCallbacks, function(callback){
        callback();
      });
    }

    return {
      getCampos: getCamposFn,
      add: addFn,
      onUpdate: onUpdateFn
    };
  }

})();
