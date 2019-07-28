import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trello-add-list',
  templateUrl: './trello-add-list.component.html',
  styleUrls: ['./trello-add-list.component.scss']
})
export class TrelloAddListComponent implements OnInit {

  constructor(private _http: HttpClient) {

   }
  @Input()
  isShowListTextBox: Boolean;
  ngOnInit() {
    console.log('s' + this.isShowListTextBox);
  }
  addListButtonName = "Add a list"
  addListButtonClass = "btn btn-secondary btn-lg"
  addListButtonIcon = "fa fa-plus"
  @Output()
  showListTextBox= new EventEmitter<Boolean>();

  el: HTMLElement = document.getElementById('listTitle');
  showList(e){
    this.isShowListTextBox =!this.isShowListTextBox;
  }
  onSubmit(userData){
      this._http.get
  }
}
