import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbitemComponent } from './breadcrumbitem.component';

describe('BreadcrumbitemComponent', () => {
  let component: BreadcrumbitemComponent;
  let fixture: ComponentFixture<BreadcrumbitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
