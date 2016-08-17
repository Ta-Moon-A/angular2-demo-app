import {Component} from "@angular/core";
import {CardComponent} from "./card.component";
import {CardItem} from "./cardItem";
import {SharedService} from "./sharedService";
import {OnInit} from "@angular/core";

@Component({
    selector: "memory-game",
    template:

    `   <div class="mg-main-board">
             <div class="mg-center">Memory Game !</div>
             <ul style="list-style-type:none">  
                  <li *ngFor="let card of cardList">
                   <div class="col-xs-3" ><card-item [selectedCard]="card" (itemOpened)="onItemOpened($event)"></card-item></div>
                  </li>
             </ul> 
          </div>`,
    directives: [CardComponent],
    providers: [SharedService]
})

export class MemoryGameComponent implements OnInit {

    cardList: Array<CardItem> = new Array<CardItem>();


    constructor(private _SharedService: SharedService) { }


    ngOnInit(): any {

        var cardSybmols = this._SharedService.getCardSymbols(12);

        for (var i = 0; i < 12; i++) {
            this.cardList.push({
                cardNumber: i,
                isOpen: true,
                isSolved: false,
                cardPoint: cardSybmols[i]
            })
        }
    }

    onItemOpened(cardInfo: boolean) {
        console.log("card is opened : " + cardInfo);
    }
}