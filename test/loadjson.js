
var sj = require('..');

exports['load json file'] = function (test) {
    var json = sj.load('test/jsons/json1.json');
    
    test.ok(json);
    test.deepEqual(json, { name: 'Adam', age: 800 });
};

