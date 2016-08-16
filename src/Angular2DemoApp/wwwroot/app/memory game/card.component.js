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
var CardComponent = (function () {
    function CardComponent() {
        this.isOpen = false;
        this.isClose = true;
    }
    CardComponent.prototype.onCardClick = function () {
        if (this.isOpen) {
            this.isClose = true;
            this.isOpen = false;
            return;
        }
        if (this.isClose) {
            this.isOpen = true;
            this.isClose = false;
            return;
        }
    };
    CardComponent = __decorate([
        core_1.Component({
            selector: "card-item",
            template: "<button [ngClass]=\"{mgCard : true,\n                         mgCardBack : isClose,\n                         mgCardFront : isOpen}\"  (click)=\"onCardClick()\">\n      <span  [ngClass]=\"{mgCardNumber : isClose}\">5</span>  \n    </button>"
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
