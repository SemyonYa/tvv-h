import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlaceEditComponent } from './admin-place-edit.component';

describe('AdminPlaceEditComponent', () => {
  let component: AdminPlaceEditComponent;
  let fixture: ComponentFixture<AdminPlaceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlaceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlaceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
