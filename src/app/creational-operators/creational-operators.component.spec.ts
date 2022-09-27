import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationalOperatorsComponent } from './creational-operators.component';

describe('CreationalOperatorsComponent', () => {
  let component: CreationalOperatorsComponent;
  let fixture: ComponentFixture<CreationalOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationalOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationalOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
