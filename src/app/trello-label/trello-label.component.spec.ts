import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloLabelComponent } from './trello-label.component';

describe('TrelloLabelComponent', () => {
  let component: TrelloLabelComponent;
  let fixture: ComponentFixture<TrelloLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
