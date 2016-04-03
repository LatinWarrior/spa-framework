/*jshint node:true*/
"use strict";
var data;
(function (data) {
    'use strict';
    function getPeople() {
        var people = [
            { id: 1, firstName: 'John', lastName: 'Papa', age: 27, location: 'Florida' },
            { id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
            { id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
            { id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
            { id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
            { id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
            { id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' },
            { id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah' }
        ];
        return people;
    }
    data.getPeople = getPeople;
    function getVehicles() {
        var vehicles = [
            { id: 1, make: 'chevrolet', model: 'sonic', year: 2016 },
            { id: 2, make: 'chevrolet', model: 'cruze', year: 2016 },
            { id: 3, make: 'chevrolet', model: 'spark', year: 2016 },
            { id: 4, make: 'chevrolet', model: 'impala', year: 2016 },
            { id: 5, make: 'chevrolet', model: 'volt', year: 2016 },
            { id: 6, make: 'chevrolet', model: 'malibu', year: 2016 }
        ];
        return vehicles;
    }
    data.getVehicles = getVehicles;
})(data || (data = {}));
module.exports = data;
//# sourceMappingURL=data.js.map