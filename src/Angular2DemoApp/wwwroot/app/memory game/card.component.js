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
        this.itemOpened = new core_1.EventEmitter();
    }
    CardComponent.prototype.onCardClick = function () {
        this.selectedCard.isOpen = !this.selectedCard.isOpen;
        this.itemOpened.emit(this.selectedCard.isOpen);
    };
    CardComponent = __decorate([
        core_1.Component({
            selector: "card-item",
            template: "<button [ngClass]=\"{mgCard : true,\n                         mgCardBack : !selectedCard.isOpen,\n                         mgCardFront : selectedCard.isOpen}\"  (click)=\"onCardClick()\" [disabled]=\"selectedCard.isSolved\">\n      <span  [ngClass]=\"{mgCardNumber : !selectedCard.isOpen}\">{{selectedCard.cardPoint}}</span>  \n    </button>",
            outputs: ['itemOpened'],
            inputs: ['selectedCard']
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
