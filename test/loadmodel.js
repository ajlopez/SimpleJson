
var sj = require('..');

exports['load simple model'] = function (test) {
    var model = sj.load('test/simplemodel');
    
    test.ok(model);
    test.ok(model.name);
    test.ok(model.age);
    test.equal(model.name, "Adam");
    test.equal(model.age, 800);
}

exports['load model with object from subdirectory'] = function (test) {
    var model = sj.load('test/model');
    
    test.ok(model);
    test.ok(model.persons);
    test.ok(model.persons.adam);
    test.ok(model.persons.eve);
    test.equal(model.persons.adam.name, "Adam");
    test.equal(model.persons.adam.age, 800);
    test.equal(model.persons.eve.name, "Eve");
    test.equal(model.persons.eve.age, 700);
}

