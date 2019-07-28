import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http'

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TrelloButtonComponent } from './trello-button/trello-button.component';
import { TrelloLabelComponent } from './trello-label/trello-label.component';
import { TrelloBoardComponent } from './trello-board/trello-board.component';
import { TrelloAddListComponent } from './trello-add-list/trello-add-list.component';
import { TrelloSubListComponent } from './trello-sub-list/trello-sub-list.component';
import { TrelloSubListItemComponent } from './trello-sub-list-item/trello-sub-list-item.component';
import { TrelloSubListHeaderComponent } from './trello-sub-list-header/trello-sub-list-header.component';
import { TrelloAddCardComponent } from './trello-add-card/trello-add-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrelloButtonComponent,
    TrelloLabelComponent,
    TrelloBoardComponent,
    TrelloAddListComponent,
    TrelloSubListComponent,
    TrelloSubListItemComponent,
    TrelloSubListHeaderComponent,
    TrelloAddCardComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ButtonsModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
