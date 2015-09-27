
var path = require('path');

function load(name) {
    return require(path.resolve(name));
}

module.exports = {
    load: load
};