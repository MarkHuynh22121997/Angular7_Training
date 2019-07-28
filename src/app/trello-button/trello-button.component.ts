import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'trello-button',
  templateUrl: './trello-button.component.html',
  styleUrls: ['./trello-button.component.scss']
})
export class TrelloButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isShowList: boolean = true;
  @Output()
   showList = new EventEmitter<boolean>();
  @Input()
    isShowListButton: Boolean

  @Input() buttonClass : string
  @Input() buttonName : string
  @Input() buttonIcon : string

  onAddListClick(){
  
      this.showList.emit(!this.isShowListButton);
    
  }

}
