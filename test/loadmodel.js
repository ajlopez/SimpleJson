
var sj = require('..');

exports['load simple model'] = function (test) {
    var model = sj.load('test/simplemodel');
    
    test.ok(model);
    test.ok(model.name);
    test.ok(model.age);
    test.equal(model.name, "Adam");
    test.equal(model.age, 800);
}

exports['load model with array'] = function (test) {
    var model = sj.load('test/model');
    
    test.ok(model);
    test.ok(model.persons);
    test.ok(Array.isArray(model.persons));
    test.ok(model.persons.length);
    test.equal(model.persons.length, 2);
    test.equal(model.persons[0].name, "Adam");
    test.equal(model.persons[0].age, 800);
    test.equal(model.persons[1].name, "Eve");
    test.equal(model.persons[1].age, 700);
}

