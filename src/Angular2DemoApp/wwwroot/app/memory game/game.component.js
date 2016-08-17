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
var sharedService_1 = require("./sharedService");
var MemoryGameComponent = (function () {
    function MemoryGameComponent(_SharedService) {
        this._SharedService = _SharedService;
        this.cardList = new Array();
    }
    MemoryGameComponent.prototype.ngOnInit = function () {
        var cardSybmols = this._SharedService.getCardSymbols(12);
        for (var i = 0; i < 12; i++) {
            this.cardList.push({
                cardNumber: i,
                isOpen: true,
                isSolved: false,
                cardPoint: cardSybmols[i]
            });
        }
    };
    MemoryGameComponent.prototype.onItemOpened = function (cardInfo) {
        console.log("card is opened : " + cardInfo);
    };
    MemoryGameComponent = __decorate([
        core_1.Component({
            selector: "memory-game",
            template: "   <div class=\"mg-main-board\">\n             <div class=\"mg-center\">Memory Game !</div>\n             <ul style=\"list-style-type:none\">  \n                  <li *ngFor=\"let card of cardList\">\n                   <div class=\"col-xs-3\" ><card-item [selectedCard]=\"card\" (itemOpened)=\"onItemOpened($event)\"></card-item></div>\n                  </li>\n             </ul> \n          </div>",
            directives: [card_component_1.CardComponent],
            providers: [sharedService_1.SharedService]
        }), 
        __metadata('design:paramtypes', [sharedService_1.SharedService])
    ], MemoryGameComponent);
    return MemoryGameComponent;
}());
exports.MemoryGameComponent = MemoryGameComponent;
