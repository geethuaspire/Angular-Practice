import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectUnderstandingComponent } from './subject-understanding.component';

describe('SubjectUnderstandingComponent', () => {
  let component: SubjectUnderstandingComponent;
  let fixture: ComponentFixture<SubjectUnderstandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectUnderstandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectUnderstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
