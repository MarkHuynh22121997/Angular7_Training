import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trello-label',
  templateUrl: './trello-label.component.html',
  styleUrls: ['./trello-label.component.scss']
})
export class TrelloLabelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() labelContent : string
}
