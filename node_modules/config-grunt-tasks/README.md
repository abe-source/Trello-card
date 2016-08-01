# config-grunt-tasks
> Grunt task configuration loader that helps organize your `Gruntfile.js` tasks configuration.

The idea is to modularize your tasks configurations to make your setup more approachable and easier to work with. So instead of having one ginormous `Gruntfile.js`, you break out all your tasks' configurations into separate files and put them in a common directory. You can then tell `config-grunt-tasks` about your directory so that it can load all these configurations for ya.  I personally like to create a folder called `tasks`, which contains all the different configurations for each grunt task in separate JavaScript files. But `config-grunt-tasks` is flexible enough to let you customize how you slice your pie.

`config-grunt-tasks` goes really well with [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks).

Also, this [article by Thomas Boyt](http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html) is good literature on the topic.


## Install

```
npm install --save-dev config-grunt-tasks
```

## Picture this

![Sample conversation](https://raw.githubusercontent.com/MiguelCastillo/config-grunt-tasks/master/images/sample-conversion.png)


## Conventions

`config-grunt-tasks` uses conventions for mapping task configurations to file names. That is to say that your `eslint` task will require a file called `eslint.js` in your `tasks` directory, where all your grunt tasks are stored. This `eslint.js` should export JSON to configure your `eslint` task, or a function that is called to get JSON your `eslint` settings.

When your task file exports a function, it will get called with the current instance of Grunt as the first argument.


## Examples

Please see [examples](https://github.com/MiguelCastillo/config-grunt-tasks/tree/master/example) for an actual `Gruntfile.js` file and a folder with `tasks`. Otherwise, below you will get quick examples of what your gruntfiles might look like.

#### First,
let's look at a setup where `config-grunt-tasks` loads all the tasks in you `tasks` folder.

``` javascript
module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  var pkg = require("./package.json");
  var taskConfig = require("config-grunt-tasks")(grunt, "./tasks");
  taskConfig.pkg = pkg;

  grunt.initConfig(taskConfig);

  grunt.registerTask("build", ["eslint:all"]);
  grunt.registerTask("test", ["connect:test", "mocha:test"]);
};
```

#### Second,
let's look at a setup where `config-grunt-tasks` loads specific tasks. Some people like more control over their stuff! I am certainly not judging you. :)

``` javascript
module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  var pkg = require("./package.json");
  var taskConfig = require("config-grunt-tasks");

  grunt.initConfig({
    pkg: pkg,
    connect: taskConfig(grunt, "./tasks/connect.js").connect,
    mocha: taskConfig(grunt, "./tasks/mocha.js").mocha,
    watch: taskConfig(grunt, "./tasks/watch.js").watch,
    eslint: taskConfig(grunt, "./tasks/eslint.js").eslint,
    concurrent: taskConfig(grunt, "./tasks/concurrent.js").concurrent,
    uglify: taskConfig(grunt, "./tasks/uglify.js").uglify,
    release: taskConfig(grunt, "./tasks/release.js").release
  });

  grunt.registerTask("build", ["eslint:all"]);
  grunt.registerTask("test", ["connect:test", "mocha:test"]);
};
```


I have several of my projects where I use `config-grunt-tasks`. Time permitting, all my projects will get this treament.  But here are some if you want to checkout how I use it.

- [bit-bundler](https://github.com/MiguelCastillo/bit-bundler/tree/master/tasks)
- [then-pipeline](https://github.com/MiguelCastillo/then-pipeline/tree/master/tasks)
- [belty](https://github.com/MiguelCastillo/belty/tree/master/tasks)


## License

Licensed under MIT
