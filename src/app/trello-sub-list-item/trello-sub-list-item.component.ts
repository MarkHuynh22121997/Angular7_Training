import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BoardService} from '../board.service';

@Component({
  selector: 'app-trello-sub-list-item',
  templateUrl: './trello-sub-list-item.component.html',
  styleUrls: ['./trello-sub-list-item.component.scss'],
  providers: [BoardService]
})
export class TrelloSubListItemComponent implements OnInit {

  constructor(private service: BoardService) { }
  @Input()
  Detail
  ngOnInit() {

  }

}
