import { Component } from '@angular/core';
import {TestService} from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TestService]
})

export class AppComponent {
  constructor( private service: TestService){}
  title = 'trello-clone';
  name = '';
  ngOnInit() {
  }

  
  

}
export interface data {
  dataResult: string;
}
