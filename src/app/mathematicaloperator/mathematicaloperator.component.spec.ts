import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathematicaloperatorComponent } from './mathematicaloperator.component';

describe('MathematicaloperatorComponent', () => {
  let component: MathematicaloperatorComponent;
  let fixture: ComponentFixture<MathematicaloperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathematicaloperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathematicaloperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
