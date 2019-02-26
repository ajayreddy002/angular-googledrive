import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOneInputComponent } from './dialogoneinput.component';

describe('DialogOneInputComponent', () => {
  let component: DialogOneInputComponent;
  let fixture: ComponentFixture<DialogOneInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOneInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
