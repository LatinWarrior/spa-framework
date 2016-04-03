namespace app.vehicles {
  'use strict';

  angular
    .module('app.vehicles')
    .config(configureStates);

  configureStates.$inject = ['$stateProvider'];
  /* @ngInject */
  function configureStates($stateProvider: ng.ui.IStateProvider) {
    var states: any[] = getStates();
    states.forEach(function(state) {
      $stateProvider.state(state.state, state.config);
    });
  }

  function getStates(): any[] {
    return [
      {
        state: 'vehicles',
        config: {
          url: '/vehicles',
          templateUrl: 'app/vehicles/vehicles.html',
          controller: 'VehiclesController',
          controllerAs: 'veh',
          title: 'Vehicles',
          settings: {
            nav: 3,
            content: '<i class="fa fa-car"></i> Vehicles'
          }
        }
      }
    ];
  }
}
