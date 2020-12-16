/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableVoluntComponent } from './table-volunt.component';

describe('TableVoluntComponent', () => {
  let component: TableVoluntComponent;
  let fixture: ComponentFixture<TableVoluntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVoluntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVoluntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
