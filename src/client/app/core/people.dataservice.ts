namespace app.core {
  'use strict';

  export interface IPeopleDataService {
    getMessageCount:() => ng.IPromise<number>;
    getPeople:() => ng.IPromise<any>;    
  }

  export class PeopleDataService implements IPeopleDataService {
    static $inject:Array<string> = ['$http', '$q', 'exception', 'logger'];

    constructor(private $http:ng.IHttpService,
                private $q:ng.IQService,
                private exception:blocks.exception.IException,
                private logger:blocks.logger.Logger) {
    }

    getMessageCount:() => ng.IPromise<number> = () => this.$q.when(72);

    getPeople:() => ng.IPromise<any> = () =>
        this.$http.get('/api/people')
            .then(this.success)
            .catch(this.fail);    

    private success:(response:any) => {} = (response) => response.data;

    private fail:(error:any) => {} = (error) => {
      var msg = error.data !== null ? error.data.description : 'The service call returned a ' + error.data + ' value';
      var reason = 'query for people failed.';
      this.exception.catcher(msg)(reason);
      return this.$q.reject(msg);
    }
  }

  angular
      .module('app.core')
      .service('people.dataservice', PeopleDataService);
}
