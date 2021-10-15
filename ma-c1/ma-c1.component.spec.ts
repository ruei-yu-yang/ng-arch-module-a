import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaC1Component } from './ma-c1.component';

describe('MaC1Component', () => {
  let component: MaC1Component;
  let fixture: ComponentFixture<MaC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaC1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
