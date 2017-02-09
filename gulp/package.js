const del = require("del");
const merge = require("merge-stream");
const runSequence = require("run-sequence");

module.exports = function(gulp, plugins, paths, meta)
{
    gulp.task("clean", function (callback)
    {
        var delPaths = [
            paths.build + "/**",
            paths.deploy + "/**"
        ];
    
        return del(delPaths, {force: true}, callback);
    });
    
    // Build App
    gulp.task("build", function (callback)
    {
        runSequence(
            "clean",
            "update-package-info",
            "compile",
            callback
        );
    });
        
    // Update Assembly Info
    gulp.task("update-package-info", function ()
    {
        // Update package.json Info
        var packageJson = gulp.src(paths.packageJson)
            .pipe(plugins.debug({title: "package.json:"}))
            .pipe(plugins.jsonEditor(meta))
            .pipe(gulp.dest(paths.root));
        
        // Update meta.json Info
        var metaJson = gulp.src(paths.metaJson)
            .pipe(plugins.debug({title: "meta.json:"}))
            .pipe(gulp.dest(paths.scripts));
        
        return merge(packageJson, metaJson);
    });

    // Package App
    gulp.task("package", ["build"], function ()
    {        
        var clientPaths = [
            paths.build + "/**"
        ];
        
        var client = gulp.src(clientPaths)
            .pipe(plugins.zip(`${meta.name}.zip`, {compress: true}))
            .pipe(gulp.dest(paths.deploy));
        
        return client;
    });
};
