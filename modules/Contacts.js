import React from 'react'


var contacts = [
    {"id": 0, "firstName": "Peter", "lastName": "Parker", "number": "555-555-5555", "email": "spidey_luvs-MJ@gmail.com", "city": "Brooklyn, NY", "pic": "Peter_parker.jpg"},
    {"id": 1, "firstName": "Bill", "lastName": "Murray", "number": "555-555-5555", "email": "ghostbusters_rulz@gmail.com", "city": "San Antonio, TX", "pic": "Bill_muarry.jpg"},
    {"id": 2, "firstName": "Bruce", "lastName": "Lee", "number": "555-555-5555", "email": "little__dragon@gmail.com", "city": "Seattle, WA", "pic": "Bruce_lee.jpg",},
    {"id": 3, "firstName": "Tom", "lastName": "Brady","number": "555-555-5555", "email": "GOAT@gmail.com", "city": "Boston, MA", "pic": "Tom_brady.jpg"},

    exports.findAll = function (req, res, next) {
        var name = req.query.name;
        if (name) {
            res.send(employees.filter(function(employee) {
                return (employee.firstName + ' ' + employee.lastName).toLowerCase().indexOf(name.toLowerCase()) > -1;
            }));
        } else {
            res.send(employees);
        }
    }

    exports.findById = function (req, res, next) {
        var id = req.params.id;
        res.send(employees[id]);
    };
