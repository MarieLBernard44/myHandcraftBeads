import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillePage } from './grille.page';

describe('GrillePage', () => {
  let component: GrillePage;
  let fixture: ComponentFixture<GrillePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
