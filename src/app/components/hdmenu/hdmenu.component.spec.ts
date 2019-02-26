import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdmenuComponent } from './hdmenu.component';

describe('HdmenuComponent', () => {
  let component: HdmenuComponent;
  let fixture: ComponentFixture<HdmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
