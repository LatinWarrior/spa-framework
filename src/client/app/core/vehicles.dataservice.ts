namespace app.core {
  'use strict';

  export interface IVehiclesDataService {   
    getVehicles:()=> ng.IPromise<any>;
  }

  export class VehiclesDataService implements IVehiclesDataService {
    static $inject:Array<string> = ['$http', '$q', 'exception', 'logger'];

    constructor(private $http:ng.IHttpService,
                private $q:ng.IQService,
                private exception:blocks.exception.IException,
                private logger:blocks.logger.Logger) {
    }   

    getVehicles:() => ng.IPromise<any> = () =>
        this.$http.get('/api/vehicles')
            .then(this.success)
            .then(this.fail);

    private success:(response:any) => {} = (response) => response.data;

    private fail:(error:any) => {} = (error) => {
      var msg = error.data !== null ? error.data.description : 'The service call returned a ' + error.data + ' value';
      var reason = 'query for vehicles failed.';
      this.exception.catcher(msg)(reason);
      return this.$q.reject(msg);
    }
  }

  angular
      .module('app.core')
      .service('vehiclesdataservice', VehiclesDataService);
}
