import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReipeComponent } from './reipe.component';

describe('ReipeComponent', () => {
  let component: ReipeComponent;
  let fixture: ComponentFixture<ReipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
