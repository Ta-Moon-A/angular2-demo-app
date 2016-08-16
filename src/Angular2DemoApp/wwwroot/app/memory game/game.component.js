"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var card_component_1 = require("./card.component");
var MemoryGameComponent = (function () {
    function MemoryGameComponent() {
    }
    MemoryGameComponent = __decorate([
        core_1.Component({
            selector: "memory-game",
            template: "   <div class=\"mg-main-board\">\n             <div class=\"mg-center\">Memory Game !</div>\n             <br>\n             <div class=\"row\">\n                    <div class=\"col-xs-3\"><card-item></card-item></div>\n                    <div class=\"col-xs-3\"><card-item></card-item></div>\n                    <div class=\"col-xs-3\"><card-item></card-item></div>\n                    <div class=\"col-xs-3\"><card-item></card-item></div>\n             </div>\n             <div class=\"row\">\n                    <div class=\"col-xs-3\"><card-item></card-item></div>\n                    <div class=\"col-xs-3\"><card-item></card-item></div>\n                    <div class=\"col-xs-3\"><card-item></card-item></div>\n                    <div class=\"col-xs-3\"><card-item></card-item></div>\n             </div>\n             <div class=\"row\">\n                    <div class=\"col-xs-3\"><card-item></card-item></div>\n                    <div class=\"col-xs-3\"><card-item></card-item></div>\n                    <div class=\"col-xs-3\"><card-item></card-item></div>\n                    <div class=\"col-xs-3\"><card-item></card-item></div>\n             </div>\n          </div>",
            directives: [card_component_1.CardComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MemoryGameComponent);
    return MemoryGameComponent;
}());
exports.MemoryGameComponent = MemoryGameComponent;