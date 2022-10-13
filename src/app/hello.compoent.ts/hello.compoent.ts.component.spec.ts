import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloCompoentTsComponent } from './hello.compoent.ts.component';

describe('HelloCompoentTsComponent', () => {
  let component: HelloCompoentTsComponent;
  let fixture: ComponentFixture<HelloCompoentTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloCompoentTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloCompoentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
