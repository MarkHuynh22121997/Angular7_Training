import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BoardService } from '../board.service';
import { Card } from '../models/card.model';
import { subList } from '../trello-board/trello-board.component';
import {FocusDirective} from '../directives/focus.directive'

@Component({
  selector: 'app-trello-add-card',
  templateUrl: './trello-add-card.component.html',
  styleUrls: ['./trello-add-card.component.scss']
})
export class TrelloAddCardComponent implements OnInit {
  card: Card
  constructor(private service: BoardService) { 
    this.card = new Card()
    
  }

  ngOnInit() {
  }
  isShowCardTextBox: boolean = true

  showAddCardTextbox(){
    this.isShowCardTextBox = !this.isShowCardTextBox
  }
  
  addCardButtonName = "Add a list"
  addCardButtonClass = "btn btn-secondary btn-lg"
  addCardButtonIcon = "fa fa-plus"

  @Input()
  idList:string

  onSubmit(){
   
    this.card.idList = this.idList
    this.service.addCard(this.card).subscribe(
      (data: Card) => {this.card =  data}
      );
  }
}
