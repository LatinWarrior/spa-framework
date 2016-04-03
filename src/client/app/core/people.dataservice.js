var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        var PeopleDataService = (function () {
            function PeopleDataService($http, $q, exception, logger) {
                var _this = this;
                this.$http = $http;
                this.$q = $q;
                this.exception = exception;
                this.logger = logger;
                this.getMessageCount = function () { return _this.$q.when(72); };
                this.getPeople = function () {
                    return _this.$http.get('/api/people')
                        .then(_this.success)
                        .catch(_this.fail);
                };
                this.success = function (response) { return response.data; };
                this.fail = function (error) {
                    var msg = error.data !== null ? error.data.description : 'The service call returned a ' + error.data + ' value';
                    var reason = 'query for people failed.';
                    _this.exception.catcher(msg)(reason);
                    return _this.$q.reject(msg);
                };
            }
            PeopleDataService.$inject = ['$http', '$q', 'exception', 'logger'];
            return PeopleDataService;
        }());
        core.PeopleDataService = PeopleDataService;
        angular
            .module('app.core')
            .service('people.dataservice', PeopleDataService);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=people.dataservice.js.map