import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnChangeDemoComponent } from './ng-on-change-demo.component';

describe('NgOnChangeDemoComponent', () => {
  let component: NgOnChangeDemoComponent;
  let fixture: ComponentFixture<NgOnChangeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnChangeDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOnChangeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
