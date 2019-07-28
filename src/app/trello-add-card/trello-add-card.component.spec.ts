import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloAddCardComponent } from './trello-add-card.component';

describe('TrelloAddCardComponent', () => {
  let component: TrelloAddCardComponent;
  let fixture: ComponentFixture<TrelloAddCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloAddCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
