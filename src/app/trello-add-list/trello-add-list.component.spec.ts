import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloAddListComponent } from './trello-add-list.component';

describe('TrelloAddListComponent', () => {
  let component: TrelloAddListComponent;
  let fixture: ComponentFixture<TrelloAddListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloAddListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloAddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
