// Gulp
const gulp = require("gulp");
const plugins = require("gulp-load-plugins")();
const path = require("path");

// Directories
var paths = {};

paths.root = path.join(__dirname, "..");
paths.metaJson = path.join(paths.root, "meta.json");
paths.nodeModules = path.join(paths.root, "node_modules");

paths.build = path.join(paths.root, "build");
paths.deploy = path.join(paths.root, "deploy");
paths.src = path.join(paths.root, "src");

paths.scripts = path.join(paths.src, "scripts");
paths.styles = path.join(paths.src, "styles");
paths.lib = path.join(paths.src, "lib");

// Global Package Info
var project = require(paths.metaJson);

// Default Task
gulp.task("default", ["package"]);

// Load the other tasks from files
require("./compile")(gulp, plugins, paths, project);
require("./package")(gulp, plugins, paths, project);
require("./run")(gulp, plugins, paths, project);

