var glob = require("glob");
var path = require("path");

var defaultOptions = {
  path: "./tasks",
  pattern: "*.js"
};

function normalizeOptions(options) {
  if (options) {
    if (typeof options === "string") {
      options = {
        path: options
      };
    }
  }

  if (!options || !options.path) {
    options = {
      path: defaultOptions.path
    };
  }

  if (!options.pattern) {
    options.pattern = defaultOptions.pattern;
  }

  return options;
}

function configGruntTask(grunt, options, taskOptions) {
  if (!grunt) {
    throw new TypeError("Must provide a valid instance of Grunt");
  }

  taskOptions = taskOptions || {};
  options = normalizeOptions(options);

  return glob
    .sync(options.pattern, { cwd: options.path, realpath: true })
    .map(function(item) {
      return {
        name: path.parse(item).name,
        config: require(item)
      };
    })
    .map(function(item) {
      if (typeof item.config === "function") {
        item.config = item.config(grunt, taskOptions[item]);
      }

      return item;
    })
    .reduce(function(container, item) {
      container[item.name] = item.config;
      return container;
    }, {});
}

module.exports = configGruntTask;
