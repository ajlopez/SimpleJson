
var sj = require('..');

exports['load simple model'] = function (test) {
    var model = sj.load('test/simplemodel');
    
    test.ok(model);
    test.ok(model.name);
    test.ok(model.age);
    test.equal(model.name, "Adam");
    test.equal(model.age, 800);
}

