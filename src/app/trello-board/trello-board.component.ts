import { Component, OnInit } from '@angular/core';
import {BoardService} from '../board.service';
import {SubList} from '../models/sub-list.model'

@Component({
  selector: 'trello-board',
  templateUrl: './trello-board.component.html',
  styleUrls: ['./trello-board.component.scss'],
  providers: [BoardService]
})
export class TrelloBoardComponent implements OnInit {
  mySubList: SubList
  constructor(private service: BoardService) {
    
   }


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
  


  getSubListID(){
    this.service.getSubList().subscribe((data: any[]) => {
      this.mySubList =  data["lists"]
    });
  }
}

export class subList{
  public id:number;
  public text: string;

  constructor(id, text) {
      this.id = id;
      this.text = text;
  }
}
