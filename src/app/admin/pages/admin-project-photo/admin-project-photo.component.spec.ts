import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectPhotoComponent } from './admin-project-photo.component';

describe('AdminProjectPhotoComponent', () => {
  let component: AdminProjectPhotoComponent;
  let fixture: ComponentFixture<AdminProjectPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProjectPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
