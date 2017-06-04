// Jquery
import jQuery = require("jquery");

// Lodash
import _ = require("lodash");

// Set globals
window["$"] = jQuery;
window["jQuery"] = jQuery;
window["_"] = _;


// Extra libraries
import "jquery-sticky";

// Polyfills
import "./Polyfills";

// Test
console.log("LOOK MA I WORK!!");