import {Component} from "@angular/core";


@Component({
    selector: "card-item",
    template:
    `<button [ngClass]="{mgCard : true,
                         mgCardBack : isClose,
                         mgCardFront : isOpen}"  (click)="onCardClick()">
      <span  [ngClass]="{mgCardNumber : isClose}">5</span>  
    </button>`

})

export class CardComponent {
    isOpen: boolean = false;
    isClose: boolean = true;


    onCardClick() {
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

    }


}