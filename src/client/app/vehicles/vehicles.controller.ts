namespace app.vehicles {
  'use strict';

  interface IVehiclesVm {
    title: string;
    vehicles: Array<any>;
    getVehicles:() => ng.IPromise<Array<any>>;
  }

  export class VehiclesController implements IVehiclesVm {
    title: string = 'Vehicles';

    static $inject:Array<string> = ['logger', '$q', 'dataservice'];

    constructor(private logger:blocks.logger.Logger,
                private $q:ng.IQService,
                private dataservice:app.core.IDataService) {
      //this.logger.info('Activated Vehicles View');
      var promises = [this.getVehicles()];
      this.$q.all(promises).then(function () {
        logger.info('Activated Vehicles View');
      });
    }

    vehicles:Array<any> = [];

    getVehicles() {
      return this.dataservice.getVehicles()
          .then((data) => {
            this.vehicles = data;
            return this.vehicles;
          });
    }
  }

  angular
      .module('app.vehicles')
      .controller('VehiclesController', VehiclesController);
}
