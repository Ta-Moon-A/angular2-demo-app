"use strict";
/// <reference path="../typings/index.d.ts" />
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_component_1 = require("./app.component");
var app_routes_1 = require('./app.routes'); // my router
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_routes_1.APP_ROUTER_PROVIDERS, forms_1.REACTIVE_FORM_DIRECTIVES, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=boot.js.map