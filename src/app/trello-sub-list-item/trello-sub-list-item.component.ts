import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TestService} from '../test.service';

@Component({
  selector: 'app-trello-sub-list-item',
  templateUrl: './trello-sub-list-item.component.html',
  styleUrls: ['./trello-sub-list-item.component.scss'],
  providers: [TestService]
})
export class TrelloSubListItemComponent implements OnInit {

  constructor(private service: TestService) { }
  listDetail
  ngOnInit() {
    this.getListDetail();
  }
  @Input()
  listID: string
  getListDetail(){
    this.service.getListItemDetail(this.listID).subscribe((data: any[]) => {
      this.listDetail =  data
    });
  }
}
