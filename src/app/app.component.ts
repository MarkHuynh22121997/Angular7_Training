import { Component } from '@angular/core';
import {BoardService} from './board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BoardService]
})

export class AppComponent {
  constructor( private service: BoardService){}
  title = 'trello-clone';
  name = '';
  ngOnInit() {
  }

  
  

}
export interface data {
  dataResult: string;
}
