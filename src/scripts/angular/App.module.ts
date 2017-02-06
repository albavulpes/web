import * as angular from "angular";

// Init the angular module
angular.module("AppModule", [
    "ngSanitize",
    "ngAnimate",
    "ngMessages",
    "ui.router",
    "ui.bootstrap",
    "toastr"
]);

// Global Angular App Declaration
export const AppModule = angular.module("AppModule");

// Register all declarations here
import "./core/config/**/*.config.ts";
import "./core/services/**/*.service.ts";
// import "./core/filters/**/*.filter.ts"
import "./core/directives/**/*.directive.ts";
import "./app/**/*.component.ts";

console.log("LOOK MA! I WORK FROM ANGULAR!");

