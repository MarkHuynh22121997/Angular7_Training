import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloSubListHeaderComponent } from './trello-sub-list-header.component';

describe('TrelloSubListHeaderComponent', () => {
  let component: TrelloSubListHeaderComponent;
  let fixture: ComponentFixture<TrelloSubListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloSubListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloSubListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
