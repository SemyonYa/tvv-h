import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrapComponent } from './admin-wrap.component';

describe('AdminWrapComponent', () => {
  let component: AdminWrapComponent;
  let fixture: ComponentFixture<AdminWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
