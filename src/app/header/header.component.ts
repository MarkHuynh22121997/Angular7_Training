import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  homeButtonClass = "btn btn-secondary"
  homeButtonName = ""
  homeButtonIcon = "fa fa-home"

  boardButtonClass = "btn btn-secondary"
  boardButtonName = "Boards"
  boardButtonIcon = "fa fa-trello"

  addButtonClass = "btn btn-secondary"
  addButtonName = ""
  addButtonIcon = "fa fa-plus"

  infoButtonClass = "btn btn-secondary"
  infoButtonName = ""
  infoButtonIcon = "fa fa-info"

  bellButtonClass = "btn btn-primary"
  bellButtonName = ""
  bellButtonIcon = "fa fa-bell"

  labelContent = "To Be Updated"

  starButtonClass = "btn btn-secondary"
  starButtonName = ""
  starButtonIcon = "fa fa-star"

  privateMemberLabelContent = "Private Member"

  teamVisibleButtonClass = "btn btn-secondary"
  teamVisibleButtonName = "Team Visible"
  teamVisibleButtonIcon = "fa fa-users"

  inviteButtonClass = "btn btn-secondary"
  inviteButtonName = "Invite"
  inviteButtonIcon = ""

  menuButtonClass = "btn btn-secondary"
  menuButtonName = "Show Menu"
  menuButtonIcon = "fa fa-bars"
}
