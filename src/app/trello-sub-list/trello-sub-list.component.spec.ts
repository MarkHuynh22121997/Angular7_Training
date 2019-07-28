import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloSubListComponent } from './trello-sub-list.component';

describe('TrelloSubListComponent', () => {
  let component: TrelloSubListComponent;
  let fixture: ComponentFixture<TrelloSubListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloSubListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloSubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
