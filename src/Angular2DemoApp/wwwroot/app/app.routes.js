"use strict";
var router_1 = require('@angular/router');
var puzzle_component_1 = require("./puzzle/puzzle.component");
var main_detail_component_1 = require("./second sample/main.detail.component");
var shopping_list_component_1 = require("./shopping list/shopping.list.component");
var http_sample_component_1 = require("./http sample/http-sample.component");
var form_sample_routes_1 = require("./form samples/form-sample.routes"); // sub routing file
exports.routes = [
    { path: '', component: puzzle_component_1.PuzzleComponent },
    { path: 'Puzzle', component: puzzle_component_1.PuzzleComponent },
    { path: 'ShoppingList', component: shopping_list_component_1.ShoppingListComponent },
    { path: 'DirectivesSample', component: main_detail_component_1.MainDetailComponent },
    { path: 'HttpSampleComponent', component: http_sample_component_1.HttpSampleComponent }
].concat(form_sample_routes_1.FormSampleRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map