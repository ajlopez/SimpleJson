
"use strict"

var path = require('path');
var fs = require('fs');

function mergeModels(model, submodel) {
    Object.keys(submodel).forEach(function (name) {        
        if (!model[name]) {
            model[name] = submodel[name];
            return;
        }
    });
}

function loadModelFromFile(filename, model, usemodel) {
    var extname = path.extname(filename);
    
    if (extname != '.json' && extname != '')
        return;
        
    if (extname == '')
        filename += '.json';
    
    var name = path.basename(filename, '.json');

    var value = require(path.resolve(filename));
    
    if (usemodel)
        mergeModels(model, value);
    else
        model[name] = value;
    
    return model;
}

function loadModelFromDirectory(dirname, model, usemodel) {
    if (!usemodel) {
        var name = path.basename(dirname);
        var submodel = {};
        model[name] = submodel;
        model = submodel;
    }
    
    fs.readdirSync(dirname).forEach(function (filename) {
        filename = path.join(dirname, filename);
        
        if (isDirectory(filename)) 
            loadModelFromDirectory(filename, model);
        else
            loadModelFromFile(filename, model);
    });
}

function load(name, model) {
    if (!model)
        model = { };
        
    if (isDirectory(name))
        loadModelFromDirectory(name, model, true);
    else
        loadModelFromFile(name, model, true);
        
    return model;
}

function isDirectory(filename) {
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

