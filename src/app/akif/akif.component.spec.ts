import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkifComponent } from './akif.component';

describe('AkifComponent', () => {
  let component: AkifComponent;
  let fixture: ComponentFixture<AkifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkifComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
