import { Component, OnInit, Input } from '@angular/core';
import {SubList} from '../models/sub-list.model'

@Component({
  selector: 'app-trello-sub-list',
  templateUrl: './trello-sub-list.component.html',
  styleUrls: ['./trello-sub-list.component.scss']
})
export class TrelloSubListComponent implements OnInit {

  constructor() { }
  @Input()
  subList: SubList
  
  ngOnInit() {
  }



}
