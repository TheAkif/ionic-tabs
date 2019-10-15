import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShameerComponent } from './shameer.component';

describe('ShameerComponent', () => {
  let component: ShameerComponent;
  let fixture: ComponentFixture<ShameerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShameerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShameerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
