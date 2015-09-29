
var path = require('path');
var fs = require('fs');

function mergeModels(model, submodel) {
    Object.keys(submodel).forEach(function (name) {        
        if (!model[name] && Array.isArray(submodel[name]))
            model[name] = [];

        if (!model[name]) {
            model[name] = submodel[name];
            return;
        }
        
        if (Array.isArray(model[name]) && Array.isArray(submodel[name])) {
            submodel[name].forEach(function (item) {
                model[name].push(item);
            });
        }
    });
}

function loadModel(dirname) {
    var model = { };
    
    fs.readdirSync(dirname).forEach(function (filename) {
        if (isDirectory(filename))
            return;
            
        if (path.extname(filename) != '.json')
            return;
            
        filename = path.join(dirname, filename);
        
        var submodel = load(filename);
        
        mergeModels(model, submodel);
    });
    
    return model;
}

function load(name) {
    if (isDirectory(name))
        return loadModel(name);
        
    return require(path.resolve(name));
}

function isDirectory(filename)
{
    try {
        var stats = fs.lstatSync(filename);
        return stats.isDirectory();
    }
    catch (err)
    {
        return false;
    }
}

module.exports = {
    load: load
};