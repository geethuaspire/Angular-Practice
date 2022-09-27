import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerSubjectComponent } from './consumer-subject.component';

describe('ConsumerSubjectComponent', () => {
  let component: ConsumerSubjectComponent;
  let fixture: ComponentFixture<ConsumerSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
