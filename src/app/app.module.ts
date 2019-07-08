import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TrelloButtonComponent } from './trello-button/trello-button.component';
import { TrelloLabelComponent } from './trello-label/trello-label.component';
import { TrelloBoardComponent } from './trello-board/trello-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrelloButtonComponent,
    TrelloLabelComponent,
    TrelloBoardComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
