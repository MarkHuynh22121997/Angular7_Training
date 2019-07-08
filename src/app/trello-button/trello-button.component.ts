import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trello-button',
  templateUrl: './trello-button.component.html',
  styleUrls: ['./trello-button.component.scss']
})
export class TrelloButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() buttonClass : string
  @Input() buttonName : string
  @Input() buttonIcon : string
}
