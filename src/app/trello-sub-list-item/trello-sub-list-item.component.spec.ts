import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloSubListItemComponent } from './trello-sub-list-item.component';

describe('TrelloSubListItemComponent', () => {
  let component: TrelloSubListItemComponent;
  let fixture: ComponentFixture<TrelloSubListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloSubListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloSubListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
