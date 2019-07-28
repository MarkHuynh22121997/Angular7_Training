import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trello-sub-list-header',
  templateUrl: './trello-sub-list-header.component.html',
  styleUrls: ['./trello-sub-list-header.component.scss']
})
export class TrelloSubListHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  @Input()
  headerName: string
}
