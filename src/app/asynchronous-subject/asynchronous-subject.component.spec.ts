import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronousSubjectComponent } from './asynchronous-subject.component';

describe('AsynchronousSubjectComponent', () => {
  let component: AsynchronousSubjectComponent;
  let fixture: ComponentFixture<AsynchronousSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynchronousSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsynchronousSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
