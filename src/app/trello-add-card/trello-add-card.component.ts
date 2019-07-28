import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trello-add-card',
  templateUrl: './trello-add-card.component.html',
  styleUrls: ['./trello-add-card.component.scss']
})
export class TrelloAddCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isShowCardTextBox: boolean = true

  showAddCardTextbox(){
    this.isShowCardTextBox = !this.isShowCardTextBox
  }
}
