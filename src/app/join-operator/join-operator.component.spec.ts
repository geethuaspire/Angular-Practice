import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinOperatorComponent } from './join-operator.component';

describe('JoinOperatorComponent', () => {
  let component: JoinOperatorComponent;
  let fixture: ComponentFixture<JoinOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
