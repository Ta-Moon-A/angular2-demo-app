import {Component} from "@angular/core";


import {CardComponent} from "./card.component";

@Component({
    selector: "memory-game",
    template:

    `   <div class="mg-main-board">
             <div class="mg-center">Memory Game !</div>
             <br>
             <div class="row">
                    <div class="col-xs-3"><card-item></card-item></div>
                    <div class="col-xs-3"><card-item></card-item></div>
                    <div class="col-xs-3"><card-item></card-item></div>
                    <div class="col-xs-3"><card-item></card-item></div>
             </div>
             <div class="row">
                    <div class="col-xs-3"><card-item></card-item></div>
                    <div class="col-xs-3"><card-item></card-item></div>
                    <div class="col-xs-3"><card-item></card-item></div>
                    <div class="col-xs-3"><card-item></card-item></div>
             </div>
             <div class="row">
                    <div class="col-xs-3"><card-item></card-item></div>
                    <div class="col-xs-3"><card-item></card-item></div>
                    <div class="col-xs-3"><card-item></card-item></div>
                    <div class="col-xs-3"><card-item></card-item></div>
             </div>
          </div>`,
    directives: [CardComponent]
})

export class MemoryGameComponent {


}