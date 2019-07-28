import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';
import {SubList} from '../models/sub-list.model'

@Component({
  selector: 'trello-board',
  templateUrl: './trello-board.component.html',
  styleUrls: ['./trello-board.component.scss'],
  providers: [TestService]
})
export class TrelloBoardComponent implements OnInit {

  constructor(private service: TestService) { }

  ngOnInit() {
    this.getSubListID();
  }
  id: string
  

  isShowListButton: Boolean = true;
  
  addListButtonName = "Add a list"
  addListButtonClass = "btn btn-secondary btn-lg"
  addListButtonIcon = "fa fa-plus"

  onAddClick(event){
    this.isShowListButton = event;
  }
  onListTextBoxMouseOver(event){
    this.isShowListButton =event;
    console.log("board"+ this.isShowListButton);
  }
  mySubList: SubList
  
  mySubList2:subList[] = [{id: 1, text: "sub List 1"}, {id: 2, text:"sub List 2"}] ;

  getSubListID(){
    this.service.getSubList().subscribe((rdata: any[]) => {
      this.mySubList =  rdata["lists"]
    });
    
    console.log(this.mySubList);
  }
}

export class subList{
  public id:number;
  public text: string;

  constructor(id,text) {
      this.id = id;
      this.text = text;
  }
}
