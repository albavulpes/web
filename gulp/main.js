// Let's get dotenv going
require("dotenv").config();

// Gulp
const gulp = require("gulp");
const plugins = require("gulp-load-plugins")();
const path = require("path");

// Directories
var paths = {};

paths.root = path.join(__dirname, "..");
paths.packageJson = path.join(paths.root, "package.json");
paths.metaJson = path.join(paths.root, "meta.json");
paths.nodeModules = path.join(paths.root, "node_modules");

paths.build = path.join(paths.root, "build");
paths.deploy = path.join(paths.root, "deploy");
paths.src = path.join(paths.root, "src");

paths.scripts = path.join(paths.src, "scripts");
paths.styles = path.join(paths.src, "styles");
paths.lib = path.join(paths.src, "lib");

// Global Package Info
var meta = require(paths.metaJson);

// Default Task
gulp.task("default", ["package"]);

// Load the other tasks from files
require("./compile")(gulp, plugins, paths, meta);
require("./package")(gulp, plugins, paths, meta);
require("./run")(gulp, plugins, paths, meta);

