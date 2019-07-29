import { Component, OnInit, Input } from '@angular/core';
import {SubList} from '../models/sub-list.model'
import { BoardService } from '../board.service';


@Component({
  selector: 'app-trello-sub-list',
  templateUrl: './trello-sub-list.component.html',
  styleUrls: ['./trello-sub-list.component.scss']
})
export class TrelloSubListComponent implements OnInit {

  constructor(private service: BoardService) { }
  @Input()
  subList: SubList
  
  listDetail
  
  ngOnInit() {
    this.getCard();
  }
  getCard(){
    this.service.getCard(this.subList.id).subscribe(
      (data: any[]) => { this.listDetail =  data},
      error => console.log(error)
    );
  }



}
