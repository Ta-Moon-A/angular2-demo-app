import {Component, EventEmitter} from "@angular/core";
import {CardItem} from "./cardItem";

@Component({
    selector: "card-item",
    template:
    `<button [ngClass]="{mgCard : true,
                         mgCardBack : !selectedCard.isOpen,
                         mgCardFront : selectedCard.isOpen}"  (click)="onCardClick()" [disabled]="selectedCard.isSolved">
      <span  [ngClass]="{mgCardNumber : !selectedCard.isOpen}">{{selectedCard.cardPoint}}</span>  
    </button>`,
    outputs: ['itemOpened'],
    inputs: ['selectedCard']

})

export class CardComponent {
    selectedCard: CardItem;
    itemOpened = new EventEmitter<boolean>();

    onCardClick() {
        this.selectedCard.isOpen = !this.selectedCard.isOpen;
        this.itemOpened.emit(this.selectedCard.isOpen);
    }
}