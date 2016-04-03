var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        var VehiclesDataService = (function () {
            function VehiclesDataService($http, $q, exception, logger) {
                var _this = this;
                this.$http = $http;
                this.$q = $q;
                this.exception = exception;
                this.logger = logger;
                this.getVehicles = function () {
                    return _this.$http.get('/api/vehicles')
                        .then(_this.success)
                        .then(_this.fail);
                };
                this.success = function (response) { return response.data; };
                this.fail = function (error) {
                    var msg = error.data !== null ? error.data.description : 'The service call returned a ' + error.data + ' value';
                    var reason = 'query for vehicles failed.';
                    _this.exception.catcher(msg)(reason);
                    return _this.$q.reject(msg);
                };
            }
            VehiclesDataService.$inject = ['$http', '$q', 'exception', 'logger'];
            return VehiclesDataService;
        }());
        core.VehiclesDataService = VehiclesDataService;
        angular
            .module('app.core')
            .service('vehiclesdataservice', VehiclesDataService);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=vehicles.dataservice.js.map